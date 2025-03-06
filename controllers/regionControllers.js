const Region = require("../models/region");

exports.create = async (req, res) => {
    try {
        const Region = await Region.create({ regionName: req.body.regionName });
        res.status(201).json({ success: true, Region });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

exports.findAll = async (req, res) => {
    try {
        const Regions = await Region.findAll();
        res.status(200).json({ success: true, Regions });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

exports.findOne = async (req, res) => {
    try {
        const Region = await Region.findByPk(req.params.id);
        if (Region) {
            res.status(200).json({ success: true, Region });
        } else {
            res.status(404).json({ success: false, message: "Region not found!" });
        }
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

exports.update = async (req, res) => {
    try {
        const [updated] = await Region.update(req.body, { where: { Regionid: req.params.id } });
        if (updated) {
            const updatedRegion = await Region.findByPk(req.params.id);
            res.status(200).json({ success: true, updatedRegion });
        } else {
            res.status(404).json({ success: false, message: "Region not found!" });
        }
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

exports.deleteRegion = async (req, res) => {
    try {
        const deleted = await Region.destroy({ where: { Regionid: req.params.id } });
        if (deleted) {
            res.status(204).json({ success: true, message: "Region deleted" });
        } else {
            res.status(404).json({ success: false, message: "Region not found" });
        }
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};
