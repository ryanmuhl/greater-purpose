const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Item extends Model { }

Item.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        pickup_address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        pickup_address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        item_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        item_description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        pickup_date: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'User',
                key: 'id',
            }
         
        },
        category_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Category',
                key: 'id',
            },
        },
        

    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'Item',
    }
    
);

module.exports = Item;

