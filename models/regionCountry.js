const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");
const Region = require("./region");
const Country = require("./country");

const RegionCountry = sequelize.define("RegionCountry", {
    RegionID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Region,
            key: "RegionID",
        },
        onDelete: "CASCADE",
    },
    CountryID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Country,
            key: "CountryID",
        },
        onDelete: "CASCADE",
    },
}, {
    timestamps: false,
    tableName: "RegionCountry",
    primaryKey: ["RegionID", "CountryID"] // Defining composite primary key
});

// Define associations
Region.belongsToMany(Country, { through: RegionCountry, foreignKey: "RegionID" });
Country.belongsToMany(Region, { through: RegionCountry, foreignKey: "CountryID" });

module.exports = RegionCountry;

