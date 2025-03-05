const { DataTypes } = require('sequelize');
const { sequelize }= require('../config/db'); // Ensure this path is correct

const Roles = sequelize.define('Roles', {
    RoleID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    RoleName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    }
}, {
    timestamps: false // Set to true if you want createdAt and updatedAt fields
});

module.exports = Roles;

