const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");
const Brand = require("./brand");
const Category = require("./category");

const Product = sequelize.define("Product", {
    ProductID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    ProductName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    Price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    Stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    BrandID: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: Brand,
            key: "BrandID",
        },
        onDelete: "SET NULL",
    },
    CategoryID: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: Category,
            key: "CategoryID",
        },
        onDelete: "SET NULL",
    },
    ImageURL: {
        type: DataTypes.STRING(500),
        allowNull: true,
    },
});

// Define associations
Brand.hasMany(Product, { foreignKey: "BrandID" });
Product.belongsTo(Brand, { foreignKey: "BrandID" });

Category.hasMany(Product, { foreignKey: "CategoryID" });
Product.belongsTo(Category, { foreignKey: "CategoryID" });

module.exports = Product;
