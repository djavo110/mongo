const operationModel = require("../models/operation.model");

async function findAll(req, res) {
    let {limit, offset} = req.quiery;
    try {
        limit = limit ? limit : 10;
        offset = offset ? offset : 1;

        let operation = await operationModel
        .find()
        .limit(limit)
        .skip((offset - 1)* limit);

        res.status(200).send({ data: operation});
    } catch (error) {
        console.log(error.message);
    }
}

async function findOne(req, res) {
    let { id } = req.params;
    try {
        let operation = await operationModel.findById(id);
        res.status(200).send({ data: operation});        
    } catch (error) {
        console.log(error.message);
    }
}

async function create(req, res) {
    let data = req.body;
    try {
        let createOperation = await operationModel.create(data);
        let operation = await orderModel.findById(data.order_id);

        order.order_id.addToSet(createOperation._id);

        res.status(200).send({ data: createOperation});
    } catch (error) {
        console.log(error.message);
    }
}

async function update(req, res) {
    let { id } = req.params;
    try {
        let updateOperation = await operationModel.findByIdAndUpdate(id, data);
        res.status(200).send({data: updateOperation});

    } catch (error) {
        console.log(error.message);
    }
}

async function remove(req, res) {
    let { id } = req.params;
    try {
        await operationModel.findByIdAndDelete(id);
        res.status(200).send({data: "Operation deleted"});
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    findAll,
    findOne,
    create,
    update,
    remove
};