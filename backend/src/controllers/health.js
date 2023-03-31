const fs = require("fs");
const path = require("path");
const dataFilePath = path.resolve(__dirname, "../data/db.json");

// Check if application is healthy
exports.getHealth = (req, res) => {
  try {
    // Check if the data file can be read from and written to
    fs.accessSync(dataFilePath, fs.constants.R_OK | fs.constants.W_OK);

    // If the data file can be read from and written to, return a 200 response with the status "Healthy"
    res.status(200).send({ status: "Healthy" });
  } catch (error) {
    // If an error occurs, return a 500 response with the status "Unhealthy" and an error message
    res.status(500).send({
      status: "Unhealthy",
      message: "Unable to read/write data file.",
      error: error.message,
    });
  }
};
