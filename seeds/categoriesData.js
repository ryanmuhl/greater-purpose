const { Category } = require('../models');


const categoriesdata = [
  {
    item_type: 'Book'
    

  },
  {
    item_type: 'Jacket'
    

  },
  {
    item_type: 'Shirt'
    

  },
  {
    item_type: 'Pants'
    

  },
  {
    item_type: 'Hat'
    

  },

];

const seedCategories = () => Category.bulkCreate(categoriesdata);

module.exports = seedCategories;