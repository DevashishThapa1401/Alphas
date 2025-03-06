const { DataTypes } = require('sequelize');
const { sequelize }= require('../config/db'); // Adjust path as needed
const State = require('./state'); // Assuming you have a State model
const Roles = require('./roles'); // Assuming you have a Role model


const User = sequelize.define('User', {
    UserID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    FirstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    LastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    Password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Phone: {
        type: DataTypes.STRING(15),
        allowNull: true
    },
    Address: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    StateID: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: State,
            key: 'StateID'
        },
        onDelete: 'SET NULL'
    },
    RoleID: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: Roles,
            key: 'RolesID'
        },
        onDelete: 'SET NULL'
    }
}, {
    tableName: 'Users', // Explicitly setting table name
    timestamps: false // Disable createdAt and updatedAt if not needed
});



module.exports = User;
