const { Router } = require("express");
const controller = require("../types/controller");
const router = Router();

router.get("/", controller.index);

module.exports = router;
