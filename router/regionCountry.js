const express = require("express");
const router = express.Router();
const regionCountryController = require("../controllers/regionCountryController");

// Create a new Region-Country association
router.post("/", regionCountryController.create);

// Get all Region-Country associations
router.get("/", regionCountryController.findAll);

// Get all countries for a specific region
router.get("/region/:regionId", regionCountryController.findCountriesByRegion);

// Get all regions for a specific country
router.get("/country/:countryId", regionCountryController.findRegionsByCountry);

// Delete a specific Region-Country association
router.delete("/", regionCountryController.delete);

module.exports = router;
