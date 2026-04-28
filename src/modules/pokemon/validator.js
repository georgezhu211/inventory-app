const { body } = require("express-validator");

const validator = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .bail()
    .isString()
    .withMessage(`Name must be a string`)
    .bail()
    .isLength({ min: 3, max: 12 })
    .withMessage(`Name must be between 3 and 12 characters`),
  body("type_id")
    .notEmpty()
    .withMessage("Type is required")
    .bail()
    .isInt({ min: 1 })
    .withMessage("Invalid type")
    .toInt(),
];

module.exports = validator;
