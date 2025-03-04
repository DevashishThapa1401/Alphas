const Product = require("../models/product");

// Create a new product
exports.create = async (req, res) => {
    try {
        const product = await Product.create({
            productName: req.body.productName,
            description: req.body.description,
            unitPrice: req.body.unitPrice,
            stock: req.body.stock,
            subCategoryID: req.body.subCategoryID,
            brandID: req.body.brandID,
            imageURL: req.body.imageURL
        });
        res.status(201).json({ success: true, product });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Get all products
exports.findAll = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.status(200).json({ success: true, products });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Get a product by ID
exports.findOne = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (product) {
            res.status(200).json({ success: true, product });
        } else {
            res.status(404).json({ success: false, message: "Product not found" });
        }
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Update a product by ID
exports.update = async (req, res) => {
    try {
        const [updated] = await Product.update(req.body, {
            where: { productID: req.params.id },
        });
        if (updated) {
            const updatedProduct = await Product.findByPk(req.params.id);
            res.status(200).json({ success: true, updatedProduct });
        } else {
            res.status(404).json({ success: false, message: "Product not found" });
        }
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Delete a product by ID
exports.deleteProduct = async (req, res) => {
    try {
        const deleted = await Product.destroy({
            where: { productID: req.params.id },
        });
        if (deleted) {
            res.status(204).json({ success: true, message: "Product deleted" });
        } else {
            res.status(404).json({ success: false, message: "Product not found" });
        }
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};
