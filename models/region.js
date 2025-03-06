const {  DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Region = sequelize.define("Region", {
    RegionID: { 
        type: DataTypes.INTEGER,
         autoIncrement: true, 
         allowNull: false, 
         primaryKey: true 
        },
    RegionName: { 
        type: DataTypes.STRING,
         allowNull: false 
        },
});

module.exports = Region;
