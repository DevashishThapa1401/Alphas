const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");
const Role = require("./roles");
const Permission = require("./permissions");

const RolePermissions = sequelize.define("RolePermissions", {
    
    PermissionID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    PermissionName:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    RoleID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        
    },
});

Role.belongsToMany(Permission, { through: RolePermissions, foreignKey: "RoleID" });
Permission.belongsToMany(Role, { through: RolePermissions, foreignKey: "PermissionID" });

module.exports = RolePermissions;
