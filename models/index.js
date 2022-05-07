const User = require('./User');
const Items = require('./Items');
const Category = require('./Category');

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

module.exports = {User, Items, Category};