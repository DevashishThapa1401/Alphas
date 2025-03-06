const express = require("express");
const router = express.Router();
const permissionController = require("../controllers/permissionControllers");

// Create a new permission
router.post("/", permissionController.create);

// Get all permissions
router.get("/", permissionController.findAll);

// Get a single permission by ID
router.get("/:id", permissionController.findOne);

// Update a permission by ID
router.put("/:id", permissionController.update);

// Delete a permission by ID
router.delete("/:id", permissionController.deletePermission);

module.exports = router;
