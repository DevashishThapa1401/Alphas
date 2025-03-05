const {  DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");
const User = require("./user");
const Product = require("./product");

const Review = sequelize.define("Review", {
    ReviewID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    UserID: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: User,
            key: "UserID",
        },
        onDelete: "CASCADE",
    },
    ProductID: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: Product,
            key: "ProductID",
        },
        onDelete: "CASCADE",
    },
    Rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1,
            max: 5,
        },
    },
    ReviewText: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    ReviewDate: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
});

Review.belongsTo(User, { foreignKey: "UserID" });
Review.belongsTo(Product, { foreignKey: "ProductID" });

module.exports = Review;
