const items = [
  { name: "Chicken Breast", category: "meat" },
  { name: "Ground Beef", category: "meat" },
  { name: "Pork Chops", category: "meat" },
  { name: "Bacon", category: "meat" },
  { name: "Salmon", category: "meat" },
  { name: "Turkey", category: "meat" },
  { name: "Sausage", category: "meat" },
  { name: "Ham", category: "meat" },
  { name: "Shrimp", category: "meat" },
  { name: "Tuna", category: "meat" },
  { name: "Carrots", category: "vegetable" },
  { name: "Broccoli", category: "vegetable" },
  { name: "Spinach", category: "vegetable" },
  { name: "Tomatoes", category: "vegetable" },
  { name: "Lettuce", category: "vegetable" },
  { name: "Onions", category: "vegetable" },
  { name: "Bell Peppers", category: "vegetable" },
  { name: "Potatoes", category: "vegetable" },
  { name: "Cucumbers", category: "vegetable" },
  { name: "Celery", category: "vegetable" },
  { name: "Garlic", category: "vegetable" },
  { name: "Mushrooms", category: "vegetable" },
  { name: "Zucchini", category: "vegetable" },
  { name: "Cauliflower", category: "vegetable" },
  { name: "Green Beans", category: "vegetable" },
  { name: "Corn", category: "vegetable" },
  { name: "Asparagus", category: "vegetable" },
  { name: "Sweet Potatoes", category: "vegetable" },
  { name: "Kale", category: "vegetable" },
  { name: "Cabbage", category: "vegetable" },
  { name: "Apples", category: "fruit" },
  { name: "Bananas", category: "fruit" },
  { name: "Oranges", category: "fruit" },
  { name: "Strawberries", category: "fruit" },
  { name: "Blueberries", category: "fruit" },
  { name: "Grapes", category: "fruit" },
  { name: "Watermelon", category: "fruit" },
  { name: "Pineapple", category: "fruit" },
  { name: "Mango", category: "fruit" },
  { name: "Peaches", category: "fruit" },
  { name: "Pears", category: "fruit" },
  { name: "Plums", category: "fruit" },
  { name: "Raspberries", category: "fruit" },
  { name: "Blackberries", category: "fruit" },
  { name: "Cherries", category: "fruit" },
  { name: "Lemons", category: "fruit" },
  { name: "Limes", category: "fruit" },
  { name: "Avocado", category: "fruit" },
  { name: "Kiwi", category: "fruit" },
  { name: "Cantaloupe", category: "fruit" },
  { name: "Bread", category: "grains" },
  { name: "Rice", category: "grains" },
  { name: "Pasta", category: "grains" },
  { name: "Oatmeal", category: "grains" },
  { name: "Cereal", category: "grains" },
  { name: "Quinoa", category: "grains" },
  { name: "Tortillas", category: "grains" },
  { name: "Bagels", category: "grains" },
  { name: "Crackers", category: "grains" },
  { name: "English Muffins", category: "grains" },
  { name: "Couscous", category: "grains" },
  { name: "Granola", category: "grains" },
  { name: "Flour", category: "grains" },
  { name: "Panko Breadcrumbs", category: "grains" },
  { name: "Paper Towels", category: "household" },
  { name: "Dish Soap", category: "household" },
  { name: "Laundry Detergent", category: "household" },
  { name: "Trash Bags", category: "household" },
  { name: "Aluminum Foil", category: "household" },
  { name: "Plastic Wrap", category: "household" },
  { name: "Sponges", category: "household" },
  { name: "Toilet Paper", category: "household" },
  { name: "Paper Plates", category: "household" },
  { name: "Ziplock Bags", category: "household" },
  { name: "Cleaning Spray", category: "household" },
  { name: "Napkins", category: "household" },
  { name: "Basil", category: "herbs" },
  { name: "Oregano", category: "herbs" },
  { name: "Thyme", category: "herbs" },
  { name: "Rosemary", category: "herbs" },
  { name: "Parsley", category: "herbs" },
  { name: "Cilantro", category: "herbs" },
  { name: "Dill", category: "herbs" },
  { name: "Mint", category: "herbs" },
  { name: "Sage", category: "herbs" },
  { name: "Bay Leaves", category: "herbs" },
  { name: "Chives", category: "herbs" },
  { name: "Cumin", category: "herbs" },
  { name: "Paprika", category: "herbs" },
  { name: "Black Pepper", category: "herbs" },
  { name: "Salt", category: "herbs" },
  { name: "Cinnamon", category: "herbs" },
  { name: "Chips", category: "snack" },
  { name: "Cookies", category: "snack" },
  { name: "Pretzels", category: "snack" },
  { name: "Popcorn", category: "snack" },
  { name: "Candy", category: "snack" },
  { name: "Chocolate", category: "snack" },
  { name: "Granola Bars", category: "snack" },
  { name: "Nuts", category: "snack" },
  { name: "Trail Mix", category: "snack" },
  { name: "Protein Bars", category: "snack" },
  { name: "Peanut Butter", category: "snack" },
  { name: "Snack Crackers", category: "snack" },
  { name: "Rice Cakes", category: "snack" },
  { name: "Fruit Snacks", category: "snack" },
  { name: "Milk", category: "dairy" },
  { name: "Eggs", category: "dairy" },
  { name: "Cheese", category: "dairy" },
  { name: "Butter", category: "dairy" },
  { name: "Yogurt", category: "dairy" },
  { name: "Sour Cream", category: "dairy" },
  { name: "Cream Cheese", category: "dairy" },
  { name: "Cottage Cheese", category: "dairy" },
  { name: "Heavy Cream", category: "dairy" },
  { name: "Whipped Cream", category: "dairy" },
  { name: "Parmesan Cheese", category: "dairy" },
  { name: "Mozzarella Cheese", category: "dairy" },
  { name: "Cheddar Cheese", category: "dairy" },
  { name: "Greek Yogurt", category: "dairy" },
  { name: "Water", category: "drinks" },
  { name: "Coffee", category: "drinks" },
  { name: "Tea", category: "drinks" },
  { name: "Orange Juice", category: "drinks" },
  { name: "Apple Juice", category: "drinks" },
  { name: "Soda", category: "drinks" },
  { name: "Sparkling Water", category: "drinks" },
  { name: "Lemonade", category: "drinks" },
  { name: "Iced Tea", category: "drinks" },
  { name: "Energy Drinks", category: "drinks" },
  { name: "Sports Drinks", category: "drinks" },
  { name: "Almond Milk", category: "drinks" },
  { name: "Coconut Water", category: "drinks" },
  { name: "Wine", category: "drinks" },
  { name: "Beer", category: "drinks" }
];

// Default values for seeding (to be updated later)
const defaults = {
  purchase_unit: "unit",
  use_unit: "unit",
  perishable: 1,
  time_to_expire: "7 days",
  priority: 3,
  cost: 0.00,
  storage_space: "pantry"
};

// Category-specific defaults
const categoryDefaults = {
  meat: { perishable: 1, time_to_expire: "5 days", storage_space: "freezer" },
  vegetable: { perishable: 1, time_to_expire: "7 days", storage_space: "fridge" },
  fruit: { perishable: 1, time_to_expire: "7 days", storage_space: "fridge" },
  grains: { perishable: 0, time_to_expire: "6 months", storage_space: "pantry" },
  household: { perishable: 0, time_to_expire: "never", storage_space: "pantry" },
  herbs: { perishable: 0, time_to_expire: "1 year", storage_space: "pantry" },
  snack: { perishable: 0, time_to_expire: "3 months", storage_space: "pantry" },
  dairy: { perishable: 1, time_to_expire: "14 days", storage_space: "fridge" },
  drinks: { perishable: 0, time_to_expire: "6 months", storage_space: "pantry" }
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  const existingItems = await knex('items').select('name');
  const existingNames = new Set(existingItems.map(i => i.name.toLowerCase()));
  
  const toInsert = items
    .filter(item => !existingNames.has(item.name.toLowerCase()))
    .map(item => {
      const catDefaults = categoryDefaults[item.category] || {};
      return {
        name: item.name,
        category: item.category,
        purchase_unit: defaults.purchase_unit,
        use_unit: defaults.use_unit,
        perishable: catDefaults.perishable ?? defaults.perishable,
        time_to_expire: catDefaults.time_to_expire || defaults.time_to_expire,
        priority: defaults.priority,
        cost: defaults.cost,
        storage_space: catDefaults.storage_space || defaults.storage_space
      };
    });
  
  if (toInsert.length > 0) {
    await knex('items').insert(toInsert);
    console.log(`Inserted ${toInsert.length} items`);
  } else {
    console.log('No new items to insert');
  }
};
