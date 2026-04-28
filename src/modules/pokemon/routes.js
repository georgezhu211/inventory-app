const { Router } = require("express");
const validateId = require("../../middlewares/validateId");
const controller = require("../pokemon/controller");
const validatePokemon = require("./validator");
const router = Router();

router.get("/", controller.index);

router.get("/new", controller.new);
router.post("/", validatePokemon, controller.create);

router.get("/:id", validateId, controller.show);

router.get("/:id/edit", validateId, controller.edit);
router.post("/:id/update", validateId, validatePokemon, controller.update);

router.post("/:id/delete", validateId, controller.delete);

module.exports = router;
