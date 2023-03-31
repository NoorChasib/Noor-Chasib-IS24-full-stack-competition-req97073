const fs = require("fs");
const path = require("path");
const dataFilePath = path.resolve(__dirname, "../../data/db.json");

// Delete product by ID
exports.deleteProductById = (req, res) => {
  try {
    // Get the product ID from the request parameters and parse it as an integer
    const productId = parseInt(req.params.productId);

    // Read the existing products from the data file
    const products = JSON.parse(fs.readFileSync(dataFilePath, "utf-8"));

    // Find the index of the product with the given ID
    const index = products.findIndex(
      (product) => product.productId === productId,
    );

    // If the product is found, delete it and write the updated product list to the data file
    if (index !== -1) {
      const deletedProduct = products.splice(index, 1)[0];
      fs.writeFileSync(dataFilePath, JSON.stringify(products, null, 2));
      res.json(deletedProduct);
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
      .json({ message: "An error occurred while deleting the product." });
  }
};
