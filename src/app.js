const express = require("express");

const pokemonRoutes = require("./modules/pokemon/routes");

const app = express();

app.use("/pokemon", pokemonRoutes);

app.get("/", (req, res) => res.send("Hello, world!"));

module.exports = app;
