const User = require('../models/user');
const bcrypt = require('bcrypt');

// Get all users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Get user by ID
exports.getUserById = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) return res.status(404).json({ error: 'User not found' });
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Create new user
exports.createUser = async (req, res) => {
    try {
        const { FirstName, LastName, Email, Password, Phone, Address, StateID, RoleID } = req.body;
        const hashedPassword = await bcrypt.hash(Password, 10);
        const user = await User.create({ FirstName, LastName, Email, Password: hashedPassword, Phone, Address, StateID, RoleID });
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Update user
exports.updateUser = async (req, res) => {
    try {
        const { FirstName, LastName, Email, Password, Phone, Address, StateID, RoleID } = req.body;
        const user = await User.findByPk(req.params.id);
        if (!user) return res.status(404).json({ error: 'User not found' });
        
        const hashedPassword = Password ? await bcrypt.hash(Password, 10) : user.Password;
        await user.update({ FirstName, LastName, Email, Password: hashedPassword, Phone, Address, StateID, RoleID });
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Delete user
exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) return res.status(404).json({ error: 'User not found' });
        
        await user.destroy();
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
