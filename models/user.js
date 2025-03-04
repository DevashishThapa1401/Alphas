const { sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");
const Role = require("./roles");
const State = require("./state");

const User = sequelize.define("User", {
    UserID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    FirstName: { type: DataTypes.STRING, allowNull: false },
    LastName: { type: DataTypes.STRING, allowNull: false },
    Email: { type: DataTypes.STRING, allowNull: false, unique: true },
    Password: { type: DataTypes.STRING, allowNull: false },
    Phone: { type: DataTypes.STRING },
    Address: { type: DataTypes.TEXT },
});

User.belongsTo(Role, { foreignKey: "RoleID" });
User.belongsTo(State, { foreignKey: "StateID" });

module.exports = User;
