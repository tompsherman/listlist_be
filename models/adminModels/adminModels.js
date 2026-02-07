const db = require("../../data/db-config");

// Pending Signups
function findAllSignups() {
  return db("pending_signups").orderBy("created_at", "desc");
}

function findSignupsByStatus(status) {
  return db("pending_signups").where({ status }).orderBy("created_at", "desc");
}

function findSignupById(signup_id) {
  return db("pending_signups").where({ signup_id }).first();
}

function addSignup(signup) {
  return db("pending_signups")
    .insert(signup)
    .then(([id]) => findSignupById(id));
}

function updateSignupStatus(signup_id, status) {
  return db("pending_signups")
    .where({ signup_id })
    .update({ status, processed_at: db.fn.now() })
    .then(() => findSignupById(signup_id));
}

// Pods with users
function findAllPodsWithUsers() {
  // Use STRING_AGG for PostgreSQL (production), GROUP_CONCAT for SQLite (dev)
  const isPostgres = db.client.config.client === 'pg';
  const emailAgg = isPostgres 
    ? db.raw("STRING_AGG(DISTINCT u.email, ', ') as member_emails")
    : db.raw("GROUP_CONCAT(DISTINCT u.email) as member_emails");
  
  return db("pods as p")
    .select(
      "p.pod_id",
      "p.pod_name",
      "p.pod_neutron_id",
      emailAgg,
      db.raw("COUNT(DISTINCT up.user_id) as member_count")
    )
    .leftJoin("user_pods as up", "p.pod_id", "up.pod_id")
    .leftJoin("users as u", "up.user_id", "u.user_id")
    .groupBy("p.pod_id", "p.pod_name", "p.pod_neutron_id");
}

function findPodListCounts() {
  return db("pod_lists")
    .select("pod_id")
    .count("list_id as list_count")
    .groupBy("pod_id");
}

// Get all approved emails for whitelist generation
function getAllApprovedEmails() {
  return db("pending_signups")
    .where({ status: "approved" })
    .select("primary_email", "invite_email_1", "invite_email_2");
}

// User/Pod creation on approval
async function createPodFromSignup(signup) {
  const { pod_name, primary_email, invite_email_1, invite_email_2 } = signup;
  
  // Collect all emails
  const emails = [primary_email, invite_email_1, invite_email_2].filter(Boolean);
  const isPostgres = db.client.config.client === 'pg';
  
  return db.transaction(async (trx) => {
    // Create users
    const userIds = [];
    for (const email of emails) {
      // Check if user already exists
      let user = await trx("users").where({ email }).first();
      if (!user) {
        let result;
        if (isPostgres) {
          [result] = await trx("users").insert({
            name: email.split("@")[0],
            email: email,
            paid_user: false,
          }).returning("user_id");
          userIds.push(result.user_id);
        } else {
          [result] = await trx("users").insert({
            name: email.split("@")[0],
            email: email,
            paid_user: false,
          });
          userIds.push(result);
        }
      } else {
        userIds.push(user.user_id);
      }
    }
    
    // Create pod with first user as neutron (owner)
    let podId;
    if (isPostgres) {
      const [result] = await trx("pods").insert({
        pod_name: pod_name || `${primary_email.split("@")[0]}'s Pod`,
        pod_neutron_id: userIds[0],
      }).returning("pod_id");
      podId = result.pod_id;
    } else {
      [podId] = await trx("pods").insert({
        pod_name: pod_name || `${primary_email.split("@")[0]}'s Pod`,
        pod_neutron_id: userIds[0],
      });
    }
    
    // Link all users to pod
    for (const userId of userIds) {
      await trx("user_pods").insert({
        user_id: userId,
        pod_id: podId,
      });
    }
    
    // Create default grocery and pantry lists
    const currentTime = new Date().toDateString().split(" ");
    const timestamp = `${currentTime[1]} ${currentTime[2]} ${currentTime[3]}`;
    
    let groceryListId, pantryListId;
    if (isPostgres) {
      const [groceryResult] = await trx("lists").insert({
        created_timestamp: timestamp,
        list_open: true,
        type: "grocery",
        starred_list: "",
      }).returning("list_id");
      groceryListId = groceryResult.list_id;
      
      const [pantryResult] = await trx("lists").insert({
        created_timestamp: timestamp,
        list_open: true,
        type: "pantry",
        starred_list: "",
      }).returning("list_id");
      pantryListId = pantryResult.list_id;
    } else {
      [groceryListId] = await trx("lists").insert({
        created_timestamp: timestamp,
        list_open: true,
        type: "grocery",
        starred_list: "",
      });
      
      [pantryListId] = await trx("lists").insert({
        created_timestamp: timestamp,
        list_open: true,
        type: "pantry",
        starred_list: "",
      });
    }
    
    // Link lists to pod
    await trx("pod_lists").insert({ pod_id: podId, list_id: groceryListId });
    await trx("pod_lists").insert({ pod_id: podId, list_id: pantryListId });
    
    return { podId, userIds, groceryListId, pantryListId };
  });
}

module.exports = {
  findAllSignups,
  findSignupsByStatus,
  findSignupById,
  addSignup,
  updateSignupStatus,
  findAllPodsWithUsers,
  findPodListCounts,
  getAllApprovedEmails,
  createPodFromSignup,
};
