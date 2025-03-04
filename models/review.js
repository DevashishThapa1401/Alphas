const { sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");
const User = require("./user");
const Product = require("./product");

const Review = sequelize.define("Review", {
    ReviewID: { type: DataTypes.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true },
    Rating: { type: DataTypes.INTEGER, allowNull: false, validate: { min: 1, max: 5 } },
    ReviewText: { type: DataTypes.TEXT },
    ReviewDate: { type: DataTypes.DATE, defaultValue: Sequelize.NOW },
});

Review.belongsTo(User, { foreignKey: "UserID" });
Review.belongsTo(Product, { foreignKey: "ProductID" });

module.exports = Review;
