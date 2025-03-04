const { sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");
const Country = require("./country"); // Import the Country model

const CountryState = sequelize.define("CountryState", {
    stateID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    stateName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    countryID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Country,
            key: "countryID",
        },
        onDelete: "CASCADE",
    },
});

Country.hasMany(CountryState, { foreignKey: "countryID" });
CountryState.belongsTo(Country, { foreignKey: "countryID" });

module.exports = CountryState;
