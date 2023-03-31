const express = require("express");
const router = express.Router();
const healthController = require("../controllers/health");

/**
 * @swagger
 * tags:
 *   name: Health
 *   description: API health check
 *
 * /health:
 *   get:
 *     tags:
 *       - Health
 *     summary: Get API health status
 *     description: Check the health status of the API
 *     responses:
 *       200:
 *         description: API is healthy
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: Healthy
 *       500:
 *         description: API is unhealthy
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: Unhealthy
 *                 message:
 *                   type: string
 *                   example: Unable to read/write data file.
 *                 error:
 *                   type: string
 *                   example: Error details
 */
router.get("/", healthController.getHealth);

module.exports = router;
