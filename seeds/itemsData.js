const { Item } = require('../models');

const itemsdata = [
  {
    first_name: 'Ryan',
    last_name: 'Uhl',
    phone_number: '919-788-7555',
    pickup_address: '112 Brier Crossing Loop',
    item_name: 'Hat',
    item_description: 'Blue Hat',
    pickup_date: "2022-08-10",
    user_id: 1,
    category_id: 5
  },
  
];

const seedItems = () => Item.bulkCreate(itemsdata);

module.exports = seedItems;