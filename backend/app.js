require("dotenv").config();
const express = require("express");
const app = express();
const dbConnection = require("./database/database");
const cors = require("cors");
const companyRouter = require("./router/companyRoute");

// Database connection
dbConnection();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cors setup
app.use(
  cors({
    origin: "*",
  })
);

// routes
app.use("/company", companyRouter);

const port = process.env.PORT;

app.listen(port, () => {
  console.log("server listining on port", port);
});
