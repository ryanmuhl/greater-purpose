const sequelize = require('../config/connection');
const seedCategories = require('./categoriesData');
const seedItems = require('./itemsData');


const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedCategories();

  await seedItems();

  process.exit(0);
};

seedAll();