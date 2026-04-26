const express = require("express");
const path = require("node:path");

const pokemonRoutes = require("./modules/pokemon/routes");

const app = express();

// Views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Routes
app.use("/pokemon", pokemonRoutes);
app.get("/", (req, res) => res.send("Hello, world!"));

module.exports = app;
