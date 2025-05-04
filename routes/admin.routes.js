const { Router} = require("express");
const { findAll, update, remove } = require("../controllers/client.controller");
const { create, findOne } = require("../models/user.model");

let router = Router();

router.get("/", findAll);
router.post("/", create);
router.get("/:id", findOne);
router.patch("/:id", update);
router.delete("/", remove);

module.exports = router;