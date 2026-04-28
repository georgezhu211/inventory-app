const repository = require("../types/repository");

exports.index = async (req, res) => {
  const types = await repository.findAll();
  res.render("types/index", { types });
};
