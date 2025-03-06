const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const RolePermission = sequelize.define("RolePermission", {
    
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
         references: {
        model: "roles", // Make sure this matches the table name in Sequelize
        key: "rolesId"
    },
    onDelete: "CASCADE"
}
});


module.exports = RolePermission;
