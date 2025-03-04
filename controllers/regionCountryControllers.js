const RegionCountry = require("../models/Region_Country");

// Create a new region-country association
exports.create = async (req, res) => {
    try {
        const regionCountry = await RegionCountry.create({
            regionID: req.body.regionID,
            countryID: req.body.countryID
        });
        res.status(201).json({ success: true, regionCountry });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Get all region-country associations
exports.findAll = async (req, res) => {
    try {
        const regionCountries = await RegionCountry.findAll();
        res.status(200).json({ success: true, regionCountries });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Get a specific region-country association by ID
exports.findOne = async (req, res) => {
    try {
        const regionCountry = await RegionCountry.findOne({
            where: {
                regionID: req.params.regionID,
                countryID: req.params.countryID
            }
        });

        if (regionCountry) {
            res.status(200).json({ success: true, regionCountry });
        } else {
            res.status(404).json({ success: false, message: "Region-Country association not found" });
        }
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Delete a region-country association
exports.delete = async (req, res) => {
    try {
        const deleted = await RegionCountry.destroy({
            where: {
                regionID: req.params.regionID,
                countryID: req.params.countryID
            }
        });

        if (deleted) {
            res.status(204).json({ success: true, message: "Region-Country association deleted" });
        } else {
            res.status(404).json({ success: false, message: "Region-Country association not found" });
        }
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};
