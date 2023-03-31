// Import the necessary product-related controller functions
const getAllProducts = require("./products/getAllProducts").getAllProducts;
const getProductById = require("./products/getProductById").getProductById;
const createProduct = require("./products/createProduct").createProduct;
const updateProductById =
  require("./products/updateProductById").updateProductById;
const deleteProductById =
  require("./products/deleteProductById").deleteProductById;

// Export the product-related controller functions
module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProductById,
  deleteProductById,
};
