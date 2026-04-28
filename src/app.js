const express = require("express");
const path = require("node:path");

const pokemonRoutes = require("./modules/pokemon/routes");
const typeRoutes = require("./modules/types/routes");

const app = express();

// Views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middlewares
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/pokemon", pokemonRoutes);
app.use("/types", typeRoutes);
app.get("/", (req, res) => res.render("home"));

// Global error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});

module.exports = app;
