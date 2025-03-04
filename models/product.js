const { sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");
const Brand = require("./brand");
const Category = require("./category");

const Product = sequelize.define("Product", {
    ProductID: { type: DataTypes.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true },
    ProductName: { type: DataTypes.STRING, allowNull: false },
    Description: { type: DataTypes.TEXT },
    Price: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    Stock: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    ImageURL: { type: DataTypes.STRING },
});

Product.belongsTo(Brand, { foreignKey: "BrandID" });
Product.belongsTo(Category, { foreignKey: "CategoryID" });

module.exports = Product;

