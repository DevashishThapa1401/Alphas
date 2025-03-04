require("dotenv").config();
const express = require("express");
const { connectDB } = require("./config/db");
const syncdb = require("./config/syncdb"); // Import sync function

const app = express();

//middleware
app.use(express.json());

// *** Importing all the routes *** //
const brandRoutes = require("./router/brandRoutes");

// *** Setting the routers *** //

app.use("/api/brand", brandRoutes);


// *** Connect to database first and sync tables ***
connectDB()
    .then(() => syncdb()) // ✅ Correct way to call the function
    .then(() => {
        console.log("✅ Database synced");
        const PORT = process.env.PORT || 5001;
        app.listen(PORT, () => {
            console.log(`🚀 Server running on http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error("❌ Error initializing app:", err);
    });