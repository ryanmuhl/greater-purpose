const User = require('./User');
const Category = require('./category');
const Item = require('./items');

User.hasMany(Item,{
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
})

Item.hasOne(Category, {
  foreignKey: 'category_id'
})

Item.belongsTo(User, {
    foreignKey: 'user_id',
})

module.exports = {User, Category, Item};