const User = require('./User');
const Category = require('./category');
const Item = require('./items');

User.hasMany(Item,{
  foreignKey: 'user_id',
})

Item.belongsTo(User, {
  foreignKey: 'user_id',
})

Item.belongsTo(Category, {
  foreignKey: 'category_id',
})

Category.hasMany(Item, {
  foreignKey: 'category_id'
})



module.exports = {User, Category, Item};