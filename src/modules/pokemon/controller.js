const pokemonRepository = require("../pokemon/repository");

exports.index = async (req, res) => {
  const pokemons = await pokemonRepository.findAll();
  res.render("pokemon/index", { pokemons });
};

exports.new = (req, res) => {
  res.render("pokemon/new");
};

exports.create = async (req, res) => {
  const { name } = req.body;
  await pokemonRepository.create(name);
  res.redirect("/pokemon");
};

exports.show = async (req, res) => {
  const pokemon = await pokemonRepository.findById(req.params.id);
  res.render("pokemon/show", { pokemon });
};
