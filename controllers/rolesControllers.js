const Roles = require("../models/roles");

exports.create = async (req, res) => {
    try {
        const Roles = await Roles.create({ rolesName: req.body.rolesName });
        res.status(201).json({ success: true, Roles });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

exports.findAll = async (req, res) => {
    try {
        const Roles = await Roles.findAll();
        res.status(200).json({ success: true, Roles });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

exports.findOne = async (req, res) => {
    try {
        const Roles = await Roles.findByPk(req.params.id);
        if (Roles) {
            res.status(200).json({ success: true, Roles });
        } else {
            res.status(404).json({ success: false, message: "Roles not found!" });
        }
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

exports.update = async (req, res) => {
    try {
        const [updated] = await Roles.update(req.body, { where: { Rolesid: req.params.id } });
        if (updated) {
            const updatedRoles = await Roles.findByPk(req.params.id);
            res.status(200).json({ success: true, updatedRoles });
        } else {
            res.status(404).json({ success: false, message: "Roles not found!" });
        }
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

exports.deleteRoles = async (req, res) => {
    try {
        const deleted = await Roles.destroy({ where: { Rolesid: req.params.id } });
        if (deleted) {
            res.status(204).json({ success: true, message: "Roles deleted" });
        } else {
            res.status(404).json({ success: false, message: "Roles not found" });
        }
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};
