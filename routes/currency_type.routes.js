const { Router } = require("express");
const { findAll, update, remove } = require("../controllers/currency_type.controller");
const { create, findOne } = require("../models/currency_type.models");

let router = Router();

router.get("/", findAll);
router.post("/", create);
router.get("/:id", findOne);
router.patch("/:id", update);
router.delete("/", remove);