const { Router } = require("express");

const c = require("../pokemon/controller");

const router = Router();

router.get("/", c.index);

module.exports = router;
