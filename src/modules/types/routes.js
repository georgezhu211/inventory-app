const { Router } = require("express");
const validateId = require("../../middlewares/validateId");
const controller = require("../types/controller");
const validateType = require("./validator");
const router = Router();

router.get("/", controller.index);

router.get("/new", controller.new);
router.post("/", validateType, controller.create);

router.get("/:id", validateId, controller.show);

router.get("/:id/edit", validateId, controller.edit);
router.post("/:id/update", validateId, validateType, controller.update);

module.exports = router;
