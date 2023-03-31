const fs = require("fs");
const path = require("path");
const dataFilePath = path.resolve(__dirname, "../../data/db.json");

// Update product by ID
exports.updateProductById = (req, res) => {
  try {
    // Get the product ID from the request parameters and parse it as an integer
    const productId = parseInt(req.params.productId);

    // Read the existing products from the data file
    const products = JSON.parse(fs.readFileSync(dataFilePath, "utf-8"));

    // Find the product with the given ID
    let product = products.find((product) => product.productId === productId);

    // If the product is found, update it with the new data and write the updated product list to the data file
    if (product) {
      // Remove the productId field from the request body
      const { productId: _, ...updatedFields } = req.body;

      // Merge the updated fields into the existing product
      product = {
        ...product,
        ...updatedFields,
      };

      // Update the products array with the updated product and write to the data file
      const updatedProducts = products.map((p) =>
        p.productId === productId ? product : p,
      );
      fs.writeFileSync(dataFilePath, JSON.stringify(updatedProducts, null, 2));

      // Return the updated product as a response
      res.json(product);
    } else {
      // If the product is not found, return a 404 error response
      res
        .status(404)
        .json({ message: `Product with ID ${productId} not found` });
    }
  } catch (error) {
    // If an error occurs, log it to the console and return a 500 error response
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while updating the product." });
  }
};
