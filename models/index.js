const User = require('./User');
const Category = require('./category');
const Item = require('./items');


// Item.hasOne(Category, {
//   foreignKey: 'category_id'
// })

// User.hasMany(Item,{
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE',
// })

// Item.belongsTo(User, {
//     foreignKey: 'user_id',
// })

module.exports = {User, Category, Item};