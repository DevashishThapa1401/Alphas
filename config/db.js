require("dotenv").config(); // Load environment variables
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('alphas1_db', 'root', 'Test@123', {
  host: '127.0.0.1',  // Change to your database host
  dialect: 'mysql',   // Use 'postgres', 'sqlite', 'mssql' if needed
});

//module.exports = sequelize;

async function connectDB() {
  try {
      await sequelize.authenticate();
      console.log("✅ Database connected...");
  } catch (err) {
      console.error("❌ Database connection failed:", err);
      process.exit(1);
  }
}

module.exports = { sequelize, connectDB };
//module.exports = sequelize;