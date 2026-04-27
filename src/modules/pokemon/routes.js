const { Router } = require("express");
const validateId = require("../../middlewares/validateId");
const c = require("../pokemon/controller");
const router = Router();

router.get("/", c.index);

router.get("/new", c.new);
router.post("/", c.create);

router.get("/:id", validateId, c.show);

router.get("/:id/edit", validateId, c.edit);
router.post("/:id/update", validateId, c.update);

router.post("/:id/delete", validateId, c.delete);

module.exports = router;
