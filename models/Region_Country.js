const { sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");
const Region = require("./region");
const Country = require("./country");

const RegionCountry = sequelize.define("RegionCountry", {
    regionCountryID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    regionID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Region,
            key: "regionID",
        },
        onDelete: "CASCADE",
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

// Associations
Region.belongsToMany(Country, { through: RegionCountry, foreignKey: "regionID" });
Country.belongsToMany(Region, { through: RegionCountry, foreignKey: "countryID" });

module.exports = RegionCountry;
