const RolePermission = require("../models/rolePermission");

// Create a new role permission
exports.create = async (req, res) => {
    try {
        const rolePermission = await RolePermission.create({
            roleID: req.body.roleID,
            permissionID: req.body.permissionID
        });
        res.status(201).json({ success: true, rolePermission });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Get all role permissions
exports.findAll = async (req, res) => {
    try {
        const rolePermissions = await RolePermission.findAll();
        res.status(200).json({ success: true, rolePermissions });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Get a specific role permission by ID
exports.findOne = async (req, res) => {
    try {
        const rolePermission = await RolePermission.findByPk(req.params.id);
        if (rolePermission) {
            res.status(200).json({ success: true, rolePermission });
        } else {
            res.status(404).json({ success: false, message: "Role permission not found" });
        }
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Update a role permission by ID
exports.update = async (req, res) => {
    try {
        const [updated] = await RolePermission.update(req.body, {
            where: { id: req.params.id }
        });

        if (updated) {
            const updatedRolePermission = await RolePermission.findByPk(req.params.id);
            res.status(200).json({ success: true, updatedRolePermission });
        } else {
            res.status(404).json({ success: false, message: "Role permission not found" });
        }
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Delete a role permission by ID
exports.delete = async (req, res) => {
    try {
        const deleted = await RolePermission.destroy({
            where: { id: req.params.id }
        });

        if (deleted) {
            res.status(204).json({ success: true, message: "Role permission deleted" });
        } else {
            res.status(404).json({ success: false, message: "Role permission not found" });
        }
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};
