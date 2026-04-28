const { body } = require("express-validator");

const validator = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Type is required")
    .bail()
    .isString()
    .withMessage(`Type must only contain letters`)
    .bail()
    .isLength({ min: 3, max: 20 })
    .withMessage(`Type must be between 3 and 20 characters`),
  ,
];

module.exports = validator;
