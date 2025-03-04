const Role = require("../models/roles");

// Create a new role
exports.create = async (req, res) => {
    try {
        const role = await Role.create({ roleName: req.body.roleName });
        res.status(201).json({ success: true, role });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Get all roles
exports.findAll = async (req, res) => {
    try {
        const roles = await Role.findAll();
        res.status(200).json({ success: true, roles });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Get a role by ID
exports.findOne = async (req, res) => {
    try {
        const role = await Role.findByPk(req.params.id);
        if (role) {
            res.status(200).json({ success: true, role });
        } else {
            res.status(404).json({ success: false, message: "Role not found" });
        }
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Update a role by ID
exports.update = async (req, res) => {
    try {
        const [updated] = await Role.update(req.body, {
            where: { roleID: req.params.id },
        });

        if (updated) {
            const updatedRole = await Role.findByPk(req.params.id);
            res.status(200).json({ success: true, updatedRole });
        } else {
            res.status(404).json({ success: false, message: "Role not found" });
        }
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Delete a role by ID
exports.delete = async (req, res) => {
    try {
        const deleted = await Role.destroy({
            where: { roleID: req.params.id },
        });

        if (deleted) {
            res.status(204).json({ success: true, message: "Role deleted" });
        } else {
            res.status(404).json({ success: false, message: "Role not found" });
        }
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};
