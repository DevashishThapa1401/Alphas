const { sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");
const Department = require("./department");
const Designation = require("./designation");

const Employee = sequelize.define("Employee", {
    EmployeeID: { type: DataTypes.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true },
    FirstName: { type: DataTypes.STRING, allowNull: false },
    LastName: { type: DataTypes.STRING, allowNull: false },
    Email: { type: DataTypes.STRING, allowNull: false, unique: true },
    Phone: { type: DataTypes.STRING, allowNull: false },
    Salary: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
});

Employee.belongsTo(Department, { foreignKey: "DepartmentID" });
Employee.belongsTo(Designation, { foreignKey: "DesignationID" });

module.exports = Employee;
