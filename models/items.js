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
        item_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        item_description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        pickup_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        pickup_contact: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        pickup_address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'User',
                key: 'id',
            },
         
        },
        category_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'category',
                key: 'id',
            },
        },
        

    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'Items',
    }
    
);

module.exports = Item;

