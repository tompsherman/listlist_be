const router = require("express").Router();
const Admin = require("./adminModels");

// @desc    Get all signups (with optional status filter)
// @route   GET /api/admin/signups
router.get("/signups", async (req, res) => {
  try {
    const { status } = req.query;
    const signups = status 
      ? await Admin.findSignupsByStatus(status)
      : await Admin.findAllSignups();
    res.status(200).json(signups);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @desc    Create a new signup request (public endpoint for marketing page)
// @route   POST /api/admin/signups
router.post("/signups", async (req, res) => {
  try {
    const { pod_name, primary_email, invite_email_1, invite_email_2 } = req.body;
    
    if (!primary_email) {
      return res.status(400).json({ message: "Primary email is required" });
    }
    
    // Check if this email already has a pending or approved signup
    const existing = await Admin.findAllSignups();
    const alreadyExists = existing.some(
      (s) => 
        s.primary_email === primary_email ||
        s.invite_email_1 === primary_email ||
        s.invite_email_2 === primary_email
    );
    
    if (alreadyExists) {
      return res.status(409).json({ message: "This email has already signed up" });
    }
    
    const signup = await Admin.addSignup({
      pod_name: pod_name || `${primary_email.split("@")[0]}'s Pod`,
      primary_email,
      invite_email_1: invite_email_1 || null,
      invite_email_2: invite_email_2 || null,
    });
    
    res.status(201).json({ message: "Signup request submitted!", signup });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @desc    Approve a signup
// @route   PUT /api/admin/signups/:id/approve
router.put("/signups/:id/approve", async (req, res) => {
  try {
    const { id } = req.params;
    
    // Get the signup
    const signup = await Admin.findSignupById(id);
    if (!signup) {
      return res.status(404).json({ message: "Signup not found" });
    }
    
    if (signup.status !== "pending") {
      return res.status(400).json({ message: "Signup already processed" });
    }
    
    // Create the pod, users, and lists
    const result = await Admin.createPodFromSignup(signup);
    
    // Update signup status
    const updated = await Admin.updateSignupStatus(id, "approved");
    
    res.status(200).json({ 
      message: "Signup approved! Pod and lists created.",
      signup: updated,
      created: result
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @desc    Reject a signup
// @route   PUT /api/admin/signups/:id/reject
router.put("/signups/:id/reject", async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Admin.updateSignupStatus(id, "rejected");
    res.status(200).json({ message: "Signup rejected", signup: updated });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @desc    Get all pods with their users
// @route   GET /api/admin/pods
router.get("/pods", async (req, res) => {
  try {
    const pods = await Admin.findAllPodsWithUsers();
    const listCounts = await Admin.findPodListCounts();
    
    // Merge list counts into pods
    const podsWithCounts = pods.map((pod) => {
      const counts = listCounts.find((c) => c.pod_id === pod.pod_id);
      return {
        ...pod,
        list_count: counts ? counts.list_count : 0,
      };
    });
    
    res.status(200).json(podsWithCounts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @desc    Get whitelist string for Vercel
// @route   GET /api/admin/whitelist
router.get("/whitelist", async (req, res) => {
  try {
    const signups = await Admin.getAllApprovedEmails();
    
    // Collect all unique emails
    const emails = new Set();
    signups.forEach((s) => {
      if (s.primary_email) emails.add(s.primary_email);
      if (s.invite_email_1) emails.add(s.invite_email_1);
      if (s.invite_email_2) emails.add(s.invite_email_2);
    });
    
    const whitelist = Array.from(emails).join("_");
    res.status(200).json({ whitelist, count: emails.size });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
