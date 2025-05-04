const { Router } = require("express");
const clentRouter = require("./client.routes");
const orderRouter = require("./order.routes");
const operationRouter = require("./operation.routes");

let router = Router();

router.use("/clients", clentRouter);
router.use("/orders", orderRouter);
router.use("/operations", operationRouter);

module.exports = router;