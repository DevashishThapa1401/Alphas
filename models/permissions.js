const { sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Permission = sequelize.define("Permission", {
    PermissionID: { type: DataTypes.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true },
    PermissionName: { type: DataTypes.STRING, allowNull: false, unique: true },
});

module.exports = Permission;
