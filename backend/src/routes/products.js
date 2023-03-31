const express = require("express");
const router = express.Router();

// Import the product-related routes
const getAllProducts = require("./products/getAllProducts");
const getProductById = require("./products/getProductById");
const createProduct = require("./products/createProduct");
const updateProductById = require("./products/updateProductById");
const deleteProductById = require("./products/deleteProductById");

// Mount the product-related routes
router.use("/", getAllProducts);
router.use("/", getProductById);
router.use("/", createProduct);
router.use("/", updateProductById);
router.use("/", deleteProductById);

module.exports = router;
