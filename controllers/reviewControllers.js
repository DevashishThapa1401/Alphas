const Review = require("../models/review");

// Create a new review
exports.create = async (req, res) => {
    try {
        const review = await Review.create({
            reviewID: req.body.reviewID,
            userID: req.body.userID,
            productID: req.body.productID,
            rating: req.body.rating,
            reviewText: req.body.reviewText,
            reviewDate: req.body.reviewDate
        });
        res.status(201).json({ success: true, review });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Get all reviews
exports.findAll = async (req, res) => {
    try {
        const reviews = await Review.findAll();
        res.status(200).json({ success: true, reviews });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Get a specific review by ID
exports.findOne = async (req, res) => {
    try {
        const review = await Review.findByPk(req.params.id);
        if (review) {
            res.status(200).json({ success: true, review });
        } else {
            res.status(404).json({ success: false, message: "Review not found" });
        }
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Update a review by ID
exports.update = async (req, res) => {
    try {
        const [updated] = await Review.update(req.body, {
            where: { reviewID: req.params.id }
        });

        if (updated) {
            const updatedReview = await Review.findByPk(req.params.id);
            res.status(200).json({ success: true, updatedReview });
        } else {
            res.status(404).json({ success: false, message: "Review not found" });
        }
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Delete a review by ID
exports.deleteReview = async (req, res) => {
    try {
        const deleted = await Review.destroy({
            where: { reviewID: req.params.id }
        });

        if (deleted) {
            res.status(204).json({ success: true, message: "Review deleted" });
        } else {
            res.status(404).json({ success: false, message: "Review not found" });
        }
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};
