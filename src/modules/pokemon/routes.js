const { Router } = require("express");

const c = require("../pokemon/controller");

const router = Router();

router.get("/", c.index);

router.get("/new", c.new);
router.post("/", c.create);

router.get("/:id", c.show);

module.exports = router;
