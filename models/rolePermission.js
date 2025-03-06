const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const RolePermission = sequelize.define("RolePermission", {
    RoleID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: "roles", // This should match the table name in Sequelize (usually singular, but depends on your configuration)
            key: "RolesID"   // The key that this column will reference in the roles table
        },
        onDelete: "CASCADE"  // Delete associated RolePermissions when a Role is deleted
    },
    PermissionID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: "permissions", // This should match the table name for permissions
            key: "PermissionID"   // The key that this column will reference in the permissions table
        },
        onDelete: "CASCADE"  // Delete associated RolePermissions when a Permission is deleted
    }
});

module.exports = RolePermission;
