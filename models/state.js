const { sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const State = sequelize.define("State", {
    StateID: { type: DataTypes.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true },
    StateName: { type: DataTypes.STRING, allowNull: false },
});

module.exports = State;
