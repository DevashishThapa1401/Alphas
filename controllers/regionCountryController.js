const RegionCountry = require("../models/regionCountry");
const Region = require("../models/region");
const Country = require("../models/country");

// Add a country to a region
exports.create = async (req, res) => {
    try {
        const { RegionID, CountryID } = req.body;
        const regionCountry = await RegionCountry.create({ RegionID, CountryID });
        res.status(201).json({ success: true, regionCountry });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Get all region-country associations
exports.findAll = async (req, res) => {
    try {
        const regionCountries = await RegionCountry.findAll({
            include: [Region, Country]
        });
        res.status(200).json({ success: true, regionCountries });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Get all countries for a specific region
exports.findCountriesByRegion = async (req, res) => {
    try {
        const { regionId } = req.params;
        const countries = await RegionCountry.findAll({
            where: { RegionID: regionId },
            include: [Country]
        });

        res.status(200).json({ success: true, countries });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Get all regions for a specific country
exports.findRegionsByCountry = async (req, res) => {
    try {
        const { countryId } = req.params;
        const regions = await RegionCountry.findAll({
            where: { CountryID: countryId },
            include: [Region]
        });

        res.status(200).json({ success: true, regions });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Delete a specific region-country association
exports.delete = async (req, res) => {
    try {
        const { RegionID, CountryID } = req.body;
        const deleted = await RegionCountry.destroy({
            where: { RegionID, CountryID }
        });

        if (deleted) {
            res.status(200).json({ success: true, message: "Region-Country association deleted" });
        } else {
            res.status(404).json({ success: false, message: "Association not found" });
        }
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};
