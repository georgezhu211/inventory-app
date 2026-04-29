const { validationResult, matchedData } = require("express-validator");
const NotFoundError = require("../../errors/NotFoundError");
const repository = require("../types/repository");
const BadRequestError = require("../../errors/BadRequestError");

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

exports.show = async (req, res) => {
  const type = await repository.findById(req.params.id);

  if (!type) {
    throw new NotFoundError("Type not found");
  }

  const pokemons = await repository.findByTypeId(req.params.id);

  res.render("types/show", { type, pokemons });
};

exports.edit = async (req, res) => {
  const type = await repository.findById(req.params.id);

  if (!type) {
    throw new NotFoundError("Type not found");
  }

  res.render("types/edit", { type });
};

exports.update = async (req, res) => {
  const type = await repository.findById(req.params.id);

  if (!type) {
    throw new NotFoundError("Type not found");
  }

  const result = validationResult(req);

  if (!result.isEmpty()) {
    return res.status(400).render("types/edit", {
      type,
      errors: result.array(),
    });
  }

  const { name } = matchedData(req);

  await repository.update(req.params.id, { name });

  res.redirect("/types");
};

exports.delete = async (req, res) => {
  const pokemons = await repository.findByTypeId(req.params.id);

  if (pokemons.length > 0) {
    throw new BadRequestError("Cannot delete type with existing pokemon");
  }

  const type = await repository.delete(req.params.id);

  if (!type) {
    throw new NotFoundError("Type not found");
  }

  res.redirect("/types");
};
