const { User } = require('../models');

const userdata = [
{
  username: 'ryanmuhl',
  password: 'Starwars#1'
}
    
  ];
  
  const seedUser = () => User.bulkCreate(userdata);
  
  module.exports = seedUser;