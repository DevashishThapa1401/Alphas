const DepartmentDesign = require("../models/department_design");

// Create a new department design
exports.create = async (req, res) => {
    try {
        const departmentDesign = await DepartmentDesign.create({
            designName: req.body.designName,
            departmentId: req.body.departmentId
        });
        res.status(201).json({ success: true, departmentDesign });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Get all department designs
exports.findAll = async (req, res) => {
    try {
        const departmentDesigns = await DepartmentDesign.findAll();
        res.status(200).json({ success: true, departmentDesigns });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Get a department design by ID
exports.findOne = async (req, res) => {
    try {
        const departmentDesign = await DepartmentDesign.findByPk(req.params.id);
        if (departmentDesign) {
            res.status(200).json({ success: true, departmentDesign });
        } else {
            res.status(404).json({ success: false, message: "Department design not found" });
        }
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Update a department design by ID
exports.update = async (req, res) => {
    try {
        const [updated] = await DepartmentDesign.update(req.body, {
            where: { designId: req.params.id },
        });
        if (updated) {
            const updatedDepartmentDesign = await DepartmentDesign.findByPk(req.params.id);
            res.status(200).json({ success: true, updatedDepartmentDesign });
        } else {
            res.status(404).json({ success: false, message: "Department design not found" });
        }
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Delete a department design by ID
exports.deleteDepartmentDesign = async (req, res) => {
    try {
        const deleted = await DepartmentDesign.destroy({
            where: { designId: req.params.id },
        });
        if (deleted) {
            res.status(204).json({ success: true, message: "Department design deleted" });
        } else {
            res.status(404).json({ success: false, message: "Department design not found" });
        }
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};
