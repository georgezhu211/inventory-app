const { validationResult, matchedData } = require("express-validator");
const NotFoundError = require("../../errors/NotFoundError");
const pokemonRepository = require("../pokemon/repository");
const typeRepository = require("../types/repository");

exports.index = async (req, res) => {
  const pokemons = await pokemonRepository.findAll();
  res.render("pokemon/index", { pokemons });
};

exports.new = async (req, res) => {
  const types = await typeRepository.findAll();
  res.render("pokemon/new", { types });
};

exports.create = async (req, res) => {
  const types = await typeRepository.findAll();

  const result = validationResult(req);

  if (!result.isEmpty()) {
    return res.status(400).render("pokemon/new", {
      types,
      errors: result.array(),
    });
  }

  const { name, type_id } = matchedData(req);

  await pokemonRepository.create({ name, type_id });

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
  const types = await typeRepository.findAll();

  if (!pokemon) {
    throw new NotFoundError("Pokemon not found");
  }

  res.render("pokemon/edit", { pokemon, types });
};

exports.update = async (req, res) => {
  const pokemon = await pokemonRepository.findById(req.params.id);
  const types = await typeRepository.findAll();

  if (!pokemon) {
    throw new NotFoundError("Pokemon not found");
  }

  const result = validationResult(req);

  if (!result.isEmpty()) {
    return res.status(400).render("pokemon/edit", {
      pokemon,
      types,
      errors: result.array(),
    });
  }

  const { name, type_id } = matchedData(req);

  await pokemonRepository.update(req.params.id, { name, type_id });

  res.redirect("/pokemon");
};

exports.delete = async (req, res) => {
  const pokemon = await pokemonRepository.delete(req.params.id);

  if (!pokemon) {
    throw new NotFoundError("Pokemon not found");
  }

  res.redirect("/pokemon");
};
