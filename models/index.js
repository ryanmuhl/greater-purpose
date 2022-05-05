const User = require('./User');
const Item = require('./items')
const Category = require('./category')

Item.hasOne(Category, {
  foreignKey: 'category_id'
})

module.exports = {User, Item, Category};