const State = require("../models/state");

// Create a new state
exports.create = async (req, res) => {
    try {
        const state = await State.create({ 
            stateName: req.body.stateName, 
            countryID: req.body.countryID 
        });
        res.status(201).json({ success: true, state });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Get all states
exports.findAll = async (req, res) => {
    try {
        const states = await State.findAll();
        res.status(200).json({ success: true, states });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Get a state by ID
exports.findOne = async (req, res) => {
    try {
        const state = await State.findByPk(req.params.id);
        if (state) {
            res.status(200).json({ success: true, state });
        } else {
            res.status(404).json({ success: false, message: "State not found" });
        }
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Update a state by ID
exports.update = async (req, res) => {
    try {
        const [updated] = await State.update(req.body, {
            where: { stateID: req.params.id },
        });

        if (updated) {
            const updatedState = await State.findByPk(req.params.id);
            res.status(200).json({ success: true, updatedState });
        } else {
            res.status(404).json({ success: false, message: "State not found" });
        }
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Delete a state by ID
exports.delete = async (req, res) => {
    try {
        const deleted = await State.destroy({
            where: { stateID: req.params.id },
        });

        if (deleted) {
            res.status(204).json({ success: true, message: "State deleted" });
        } else {
            res.status(404).json({ success: false, message: "State not found" });
        }
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};
