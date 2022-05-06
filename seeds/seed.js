const sequelize = require('../config/connection');
const seedCategories = require('./categoriesData');
const seedItems = require('./itemsData');
const seedUser = require('./userData');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');

  await seedCategories();
  console.log('--------------');

  await seedItems();
  console.log('--------------');

  await seedUser();
  console.log('--------------');

  process.exit(0);
};

seedAll();