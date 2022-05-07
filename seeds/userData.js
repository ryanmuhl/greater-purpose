const { User } = require('../models');

const userdata = [
{
  username: '',
  password: ''
}
    
  ];
  
  const seedUser = () => User.bulkCreate(userdata);
  
  module.exports = seedUser;