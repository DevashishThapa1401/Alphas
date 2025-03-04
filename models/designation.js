const { sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Designation = sequelize.define("Designation", {
    DesignationID: { type: DataTypes.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true },
    DesignationName: { type: DataTypes.STRING, allowNull: false, unique: true },
});

module.exports = Designation;
