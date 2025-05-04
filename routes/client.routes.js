const { Router } = require("express");
const { findAll, create, findOne, update, remove } = require("../controllers/client.controller");

let router = Router();

router.get("/", findAll);
router.post("/", create);
router.get("/:id", findOne);
router.patch("/:id", update);
router.delete("/", remove);

module.exports = router;