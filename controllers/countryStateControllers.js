const CountryState = require("../models/countryState");

// Create a new country state
exports.create = async (req, res) => {
    try {
        const countryState = await CountryState.create({
            stateName: req.body.stateName,
            countryId: req.body.countryId
        });
        res.status(201).json({ success: true, countryState });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Get all country states
exports.findAll = async (req, res) => {
    try {
        const countryStates = await CountryState.findAll();
        res.status(200).json({ success: true, countryStates });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Get a country state by ID
exports.findOne = async (req, res) => {
    try {
        const countryState = await CountryState.findByPk(req.params.id);
        if (countryState) {
            res.status(200).json({ success: true, countryState });
        } else {
            res.status(404).json({ success: false, message: "Country State not found" });
        }
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Update a country state by ID
exports.update = async (req, res) => {
    try {
        const [updated] = await CountryState.update(req.body, {
            where: { stateid: req.params.id },
        });
        if (updated) {
            const updatedCountryState = await CountryState.findByPk(req.params.id);
            res.status(200).json({ success: true, updatedCountryState });
        } else {
            res.status(404).json({ success: false, message: "Country State not found" });
        }
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Delete a country state by ID
exports.deleteCountryState = async (req, res) => {
    try {
        const deleted = await CountryState.destroy({
            where: { stateid: req.params.id },
        });
        if (deleted) {
            res.status(204).json({ success: true, message: "Country State deleted" });
        } else {
            res.status(404).json({ success: false, message: "Country State not found" });
        }
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};
