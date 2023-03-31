const fs = require("fs");
const path = require("path");
const dataFilePath = path.resolve(__dirname, "../../data/db.json");

// Get all products
exports.getAllProducts = (req, res) => {
  try {
    // Read the existing products from the data file
    const products = JSON.parse(fs.readFileSync(dataFilePath, "utf-8"));

    // Return all products as a response
    res.json(products);
  } catch (error) {
    // If an error occurs, log it to the console and return a 500 error response
    console.error(`Error reading file: ${dataFilePath}`, error);
    res.status(500).json({
      message:
        "An error occurred while retrieving products. Please try again later.",
    });
  }
};
