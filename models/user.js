const {  DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");
const Country = require("./country");
const State = require("./state");

const user = sequelize.define("user", {
    userID: { type: DataTypes.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true },
    firstName: { type: DataTypes.STRING, allowNull: false },
    lastName: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.STRING },
    address: { type: DataTypes.TEXT },
    stateId:{type: DataTypes.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true},
    roleId:{type: DataTypes.INTEGER,autoIncrement: true,allowNull: false,primaryKey: true,}
});

Customer.belongsTo(Country, { foreignKey: "roleId" });
Customer.belongsTo(State, { foreignKey: "StateID" });

module.exports = user;