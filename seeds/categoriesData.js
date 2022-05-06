const { Category } = require('../models');

const categoriesdata = [
  {
    item_type: 'Book',
    // filename: 'lalala.jpg',

  },
  {
    item_type: 'Jacket',
    // filename: 'lalala.jpg',

  },
  {
    item_type: 'Shirt',
    // filename: 'lalala.jpg',

  },
  {
    item_type: 'Pants',
    // filename: 'lalala.jpg',

  },
  {
    item_type: 'Hat',
    // filename: 'lalala.jpg',

  },

];

const seedCategories = () => Category.bulkCreate(categoriesdata);

module.exports = seedCategories;