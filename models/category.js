const { sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Category = sequelize.define("Category", {
    CategoryID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    CategoryName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
});

module.exports = Category;
