require("dotenv").config();
const express = require("express");
const { connectDB } = require("./config/db");
const syncdb = require("./config/syncdb"); // Import sync function

const app = express();

//middleware
app.use(express.json());

// *** Importing all the routes *** //
const brandRoutes = require("./router/brandRoutes");
const countryRoutes = require("./router/countryRoutes");
const departmentRoutes = require("./router/departmentRoutes");
const customerRoutes = require("./router/customerRoutes");
const stateRoutes = require("./router/stateRoutes");
const regionRoutes = require("./router/regionRoutes");
//const roleRoutes = require("./router/roleRoutes");
const employeeRoutes = require("./router/employeeRoutes");
//const rolepermissionsRoutes = require("./router/rolepermissionsRoutes");
const permissionRoutes = require("./router/permissionRoutes");
//const region_countryRoutes = require("./router/region_countryRoutes");
//const userRoutes = require("./router/userRoutes");
const designationRoutes = require("./router/designationRoutes");
//const department_designationRoutes = require("./router/department_designRoutes");
//const productRoutes = require("./router/productRoutes");
const categoryRoutes = require("./router/categoryRoutes");
//const reviewRoutes = require("./router/reviewRoutes"); 

// *** Setting the routers *** //

app.use("/api/brand", brandRoutes);
app.use("/api/country", countryRoutes);
app.use("/api/department", departmentRoutes);
app.use("/api/customer", customerRoutes);
app.use("/api/state", stateRoutes);
app.use("/api/region", regionRoutes);
//app.use("/api/role", roleRoutes);
app.use("/api/employee", employeeRoutes);
//app.use("/api/rolepermissions", rolepermissionsRoutes);
app.use("/api/permission", permissionRoutes);
//app.use("/api/region-country", region_countryRoutes);
//app.use("/api/user", userRoutes);
app.use("/api/designation", designationRoutes);
//app.use("/api/department-design", department_designationRoutes);
//app.use("/api/product", productRoutes);
 app.use("/api/category", categoryRoutes);
//app.use("/api/review", reviewRoutes);



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