const { body, validationResult, matchedData } = require("express-validator");

const validatePokemon = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .bail()
    .isAlpha()
    .withMessage(`Name must only contain letters`)
    .bail()
    .isLength({ min: 3, max: 12 })
    .withMessage(`Name must be between 3 and 12 characters`),
  ,
];

module.exports = validatePokemon;
