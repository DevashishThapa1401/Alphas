const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const State = sequelize.define("State", {
    StateID: { 
        type: DataTypes.INTEGER, 
        autoIncrement: true, 
        allowNull: false, 
        primaryKey: true 
    },
    StateName: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },
    CountryID: { 
        type: DataTypes.INTEGER, 
        allowNull: false,
        references: {
            model: "country", // Make sure this matches the table name in Sequelize
            key: "CountryID"
        },
        onDelete: "CASCADE"
    }
});

module.exports = State;
