const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Ensure this path is correct

const Brand = sequelize.define('Brand', {
    BrandID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    BrandName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    }
}, {
    timestamps: false // Set to true if you want createdAt and updatedAt fields
});

module.exports = Brand;

