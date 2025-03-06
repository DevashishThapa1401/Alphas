const { sequelize } = require("./db");

// Import all models
require("../models/brand");
require("../models/country");
require("../models/state");
require("../models/customer");
require("../models/department_design");
require("../models/department");
require("../models/designation");
require("../models/employee");
require("../models/permissions");
require("../models/regionCountry");
require("../models/region");
require("../models/rolePermission");
require("../models/roles");
require("../models/state");
require("../models/user");

async function syncdb() {
    try {
        await sequelize.sync({ alter: true }); // Updates tables without deleting data
        console.log("✅ Tables synchronized successfully!");
    } catch (error) {
        console.error("❌ Error syncing database:", error);
    }
}

module.exports = syncdb;