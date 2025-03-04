const { sequelize } = require("sequelize");
const { sequelize } = require("../config/db");
const Role = require("./roles");
const Permission = require("./permissions");

const RolePermissions = sequelize.define("RolePermissions", {});

Role.belongsToMany(Permission, { through: RolePermissions, foreignKey: "RoleID" });
Permission.belongsToMany(Role, { through: RolePermissions, foreignKey: "PermissionID" });

module.exports = RolePermissions;
