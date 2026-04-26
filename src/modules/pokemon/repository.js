const pokemon = [
  { id: 1, name: "Bulbasaur" },
  { id: 2, name: "Charmander" },
  { id: 3, name: "Squirtle" },
];

exports.findAll = async (req, res) => {
  return pokemon;
};
