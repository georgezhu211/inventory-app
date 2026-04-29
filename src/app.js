const express = require("express");
const path = require("node:path");
const expressLayouts = require("express-ejs-layouts");

const pokemonRoutes = require("./modules/pokemon/routes");
const typeRoutes = require("./modules/types/routes");

const app = express();

// Views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(expressLayouts);

// Routes
app.use("/pokemon", pokemonRoutes);
app.use("/types", typeRoutes);
app.get("/", (req, res) => res.redirect("/types"));

// Global error handler
app.use((err, req, res, next) => {
  console.error(err);

  const statusCode = err.statusCode || 500;
  const message = statusCode === 500 ? "Something went wrong" : err.message;

  res.status(statusCode).send(message);
});

module.exports = app;
