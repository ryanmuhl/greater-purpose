const sequelize = require('../config/connection');
const seedCategories = require('./categoriesData');
const seedItems = require('./itemsData');
const seedUser = require('./userData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedCategories();

  await seedItems();

  await seedUser();

  process.exit(0);
};

seedAll();