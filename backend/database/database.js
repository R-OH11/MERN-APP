const mongoose = require("mongoose");
const dbUrl = process.env.DB_URL;

const dbConnection = () => {
  mongoose
    .connect(dbUrl)
    .then(() => {
      console.log("Database connected");
    })
    .catch((err) => {
      console.error("Database connection error:", err);
    });
};

module.exports = dbConnection;
