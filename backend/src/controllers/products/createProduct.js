const fs = require("fs");
const path = require("path");
const dataFilePath = path.resolve(__dirname, "../../data/db.json");

// Create a new product
exports.createProduct = (req, res) => {
  try {
    // Define an array of required fields for creating a new product
    const requiredFields = [
      "productName",
      "productOwnerName",
      "Developers",
      "scrumMasterName",
      "startDate",
      "methodology",
    ];

    // Check if all required fields are present in the request body
    const missingFields = requiredFields.filter(
      (field) => !req.body.hasOwnProperty(field),
    );

    // If any required fields are missing, return a 400 error response
    if (missingFields.length > 0) {
      return res.status(400).json({
        message: "Invalid request data",
        missingFields: `The following fields are required: ${missingFields.join(
          ", ",
        )}`,
      });
    }

    // If all required fields are present, create a new product
    // Remove productId from req.body if it's present
    const { productId: _, ...productData } = req.body;

    // Read the existing products from the data file
    const products = JSON.parse(fs.readFileSync(dataFilePath, "utf-8"));

    // Find the highest productId and increment it by 1 to create a new productId
    const highestProductId = products.reduce((max, product) => {
      return Math.max(max, product.productId);
    }, 0);

    // Create the new product object with a new productId
    const product = {
      productId: highestProductId + 1,
      ...productData,
    };

    // Add the new product to the existing products and write to the data file
    products.push(product);
    fs.writeFileSync(dataFilePath, JSON.stringify(products, null, 2));

    // Return a 201 response with the new product
    res.status(201).json(product);
  } catch (error) {
    // If an error occurs, log it to the console and return a 500 error response
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while creating the product." });
  }
};
