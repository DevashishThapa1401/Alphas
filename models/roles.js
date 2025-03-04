const { sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Role = sequelize.define("Role", {
    RoleID: { type: DataTypes.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true },
    RoleName: { type: DataTypes.STRING, allowNull: false, unique: true },
});

module.exports = Role;
