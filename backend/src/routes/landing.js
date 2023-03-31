// routes/index.js
const express = require("express");
const router = express.Router();
const landingRouter = require("../controllers/landing");

router.get("/", landingRouter.getLanding);

module.exports = router;
