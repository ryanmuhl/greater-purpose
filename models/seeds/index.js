const sequelize = require('../config/connection');
const seedCategories = require('./categoriesData');
const seedItems = require('./itemsData');

//function to seed pre populated seed data from seeds folder
const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedCategories();

  await seedItems();

  process.exit(0);
};

seedAll();