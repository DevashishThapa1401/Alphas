const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Roles = sequelize.define("Roles", {
    RolesID: { 
        type: DataTypes.INTEGER, 
        autoIncrement: true, 
        allowNull: false, 
        primaryKey: true 
    },
    RolesName: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },
            
});

module.exports = Roles;
