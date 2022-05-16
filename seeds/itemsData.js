const { Item } = require('../models');

const itemsdata = [
  {
    item_name: 'Hat',
    item_description: 'Blue Ball Cap',
    pickup_date: '2022-08-17',
    pickup_contact: 'ObiWan Kenobi',
    pickup_address: '112 Death Star Ct, Raleigh, NC 27703',
    user_id: '1'
  },
  {
    item_name: 'Jacket',
    item_description: 'Black Winter Jacket',
    pickup_date: '2022-08-18',
    pickup_contact: 'ObiWan Kenobi',
    pickup_address: '112 Death Star Ct, Raleigh, NC 27703'
  },
  {
    item_name: 'Book',
    item_description: 'Hitchhikers Guide to the Galaxy',
    pickup_date: '2022-08-25',
    pickup_contact: 'Luke Skywalker',
    pickup_address: '125 Tatooine Rd, Raleigh, NC 27703'
  },
  {
    item_name: 'Shirt',
    item_description: 'White T-shrit with Yoda logo on front',
    pickup_date: '2022-08-28',
    pickup_contact: 'Han Solo',
    pickup_address: '127 Tatooine Rd, Raleigh, NC 27703'
  },
  {
    item_name: 'Pants',
    item_description: 'Faded and worn blue jeans',
    pickup_date: '2022-08-29',
    pickup_contact: 'Admiral Ackbar',
    pickup_address: '100 Dagobah Cir, Raleigh, NC 27703'
  },
  
];

const seedItems = () => Item.bulkCreate(itemsdata);

module.exports = seedItems;