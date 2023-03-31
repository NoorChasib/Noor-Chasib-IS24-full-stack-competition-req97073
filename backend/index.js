const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// Import the routers
const productsRouter = require("./src/routes/products");
const healthRouter = require("./src/routes/health");
const landingRouter = require("./src/routes/landing");

// Import the Swagger documentation and add it to the app
const swagger = require("./src/swagger/swagger");
swagger(app);

// Use bodyParser middleware to parse JSON request bodies
app.use(bodyParser.json());

// Mount the routers onto the appropriate URL paths
app.use("/api/product", productsRouter);
app.use("/api/health", healthRouter);
app.use("/", landingRouter);

// Start the server and listen on port 3000
app.listen(3000, () => console.log("Server started on port 3000"));
