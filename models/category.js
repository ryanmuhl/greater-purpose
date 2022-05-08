const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Category extends Model {}

Category.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        item_type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // filename: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // }
    },
  
    {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Category',
    }
);

module.exports = Category;