const State = require("../models/state");
//const state = require("../models/state");

// Create a new customer
exports.create = async (req, res) => {
    try {
        const state = await State.create({
            stateId: req.body.stateId,
            stateName: req.body.stateName,
            countryID: req.body.countryID
            
        });
        res.status(201).json({ success: true, customer });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Get all customers
exports.findAll = async (req, res) => {
    try {
        const customers = await State.findAll();
        res.status(200).json({ success: true, customers });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Get a customer by ID
exports.findOne = async (req, res) => {
    try {
        const customer = await State.findByPk(req.params.id);
        if (customer) {
            res.status(200).json({ success: true, customer });
        } else {
            res.status(404).json({ success: false, message: "State not found" });
        }
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Update a customer by ID
exports.update = async (req, res) => {
    try {
        const [updated] = await State.update(req.body, {
            where: { customerId: req.params.id },
        });
        if (updated) {
            const updatedCustomer = await State.findByPk(req.params.id);
            res.status(200).json({ success: true, updatedCustomer });
        } else {
            res.status(404).json({ success: false, message: "State  not found" });
        }
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Delete a customer by ID
exports.deleteCustomer = async (req, res) => {
    try {
        const deleted = await State.destroy({
            where: { customerId: req.params.id },
        });
        if (deleted) {
            res.status(204).json({ success: true, message: "State  deleted" });
        } else {
            res.status(404).json({ success: false, message: "State not found" });
        }
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};
