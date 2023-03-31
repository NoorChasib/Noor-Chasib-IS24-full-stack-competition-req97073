const express = require("express");
const router = express.Router();
const productsController = require("../../controllers/products");

/**
 * @swagger
 *   tags:
 *   name: Products
 *   description: API product management
 *
 * /product:
 *   get:
 *     tags:
 *       - Products
 *     summary: Get all products
 *     description: Retrieve a list of all products
 *     responses:
 *       200:
 *         description: A list of products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: An unexpected error occurred
 */
router.get("/", productsController.getAllProducts);

module.exports = router;
