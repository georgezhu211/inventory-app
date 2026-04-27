const { validationResult, matchedData } = require("express-validator");
const NotFoundError = require("../../errors/NotFoundError");
const pokemonRepository = require("../pokemon/repository");

exports.index = async (req, res) => {
  const pokemons = await pokemonRepository.findAll();
  res.render("pokemon/index", { pokemons });
};

exports.new = (req, res) => {
  res.render("pokemon/new");
};

exports.create = async (req, res) => {
  const result = validationResult(req);

  if (!result.isEmpty()) {
    return res.status(400).render("pokemon/new", {
      errors: result.array(),
    });
  }

  const { name } = matchedData(req);

  await pokemonRepository.create({ name });

  res.redirect("/pokemon");
};

exports.show = async (req, res) => {
  const pokemon = await pokemonRepository.findById(req.params.id);

  if (!pokemon) {
    throw new NotFoundError("Pokemon not found");
  }

  res.render("pokemon/show", { pokemon });
};

exports.edit = async (req, res) => {
  const pokemon = await pokemonRepository.findById(req.params.id);

  if (!pokemon) {
    throw new NotFoundError("Pokemon not found");
  }

  res.render("pokemon/edit", { pokemon });
};

exports.update = async (req, res) => {
  const pokemon = await pokemonRepository.findById(req.params.id);

  if (!pokemon) {
    throw new NotFoundError("Pokemon not found");
  }

  const result = validationResult(req);

  if (!result.isEmpty()) {
    return res.status(400).render("pokemon/edit", {
      pokemon,
      errors: result.array(),
    });
  }

  const { name } = matchedData(req);

  await pokemonRepository.update(req.params.id, { name });

  res.redirect("/pokemon");
};

exports.delete = async (req, res) => {
  const pokemon = await pokemonRepository.delete(req.params.id);

  if (!pokemon) {
    throw new NotFoundError("Pokemon not found");
  }

  res.redirect("/pokemon");
};
