const { Router } = require("express");
const controller = require("../types/controller");
const validateType = require("./validator");
const router = Router();

router.get("/", controller.index);

router.get("/new", controller.new);
router.post("/", validateType, controller.create);

module.exports = router;
