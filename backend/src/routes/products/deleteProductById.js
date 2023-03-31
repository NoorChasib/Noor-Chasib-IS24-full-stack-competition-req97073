const express = require("express");
const router = express.Router();
const productsController = require("../../controllers/products");

/**
 * @swagger
 * /product/{productId}:
 *   delete:
 *     tags:
 *       - Products
 *     summary: Delete a product by ID
 *     description: Delete an existing product by ID
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the product to delete
 *     responses:
 *       200:
 *         description: The deleted product
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Product not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Product with ID {productId} not found
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
router.delete("/:productId", productsController.deleteProductById);

module.exports = router;
