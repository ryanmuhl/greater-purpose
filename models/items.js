const { Model, DataTypes, INTEGER } = require('sequelize');
const sequelize = require('../config/connection');

class Item extends Model {}

Items.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        category: {
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
                model: 'user',
                key: 'id',
            },
        category_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'category',
                key: 'id',
            },
        },
        },

            sequelize,
            freezeTableName: true,
            underscored: true,
            modelName: 'item',


    }
);

module.exports = Items

