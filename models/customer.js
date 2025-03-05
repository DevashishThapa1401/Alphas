const {  DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");
const Country = require("./country");
const State = require("./state");

const Customer = sequelize.define("Customer", {
    CustomerID: { type: DataTypes.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true },
    FirstName: { type: DataTypes.STRING, allowNull: false },
    LastName: { type: DataTypes.STRING, allowNull: false },
    Email: { type: DataTypes.STRING, allowNull: false, unique: true },
    Password: { type: DataTypes.STRING, allowNull: false },
    Phone: { type: DataTypes.STRING },
    Address: { type: DataTypes.TEXT },
});

Customer.belongsTo(Country, { foreignKey: "CountryID" });
Customer.belongsTo(State, { foreignKey: "StateID" });

module.exports = Customer;

