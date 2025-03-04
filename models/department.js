const { sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Department = sequelize.define("Department", {
    DepartmentID: { type: DataTypes.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true },
    DepartmentName: { type: DataTypes.STRING, allowNull: false, unique: true },
});

module.exports = Department;
