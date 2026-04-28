const { validationResult, matchedData } = require("express-validator");

const repository = require("../types/repository");

exports.index = async (req, res) => {
  const types = await repository.findAll();
  res.render("types/index", { types });
};

exports.new = (req, res) => {
  res.render("types/new");
};

exports.create = async (req, res) => {
  const result = validationResult(req);

  if (!result.isEmpty()) {
    return res.status(400).render("types/new", {
      errors: result.array(),
    });
  }

  const { name } = matchedData(req);

  await repository.create({ name });

  res.redirect("/types");
};
