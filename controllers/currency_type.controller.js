const currency_typeModel = require("../models/currency_type.models");

async function findAll(req, res) {
  let { limit, offset } = req.query;
  try {
    limit = limit ? limit : 10;
    offset = offset ? offset : 1;

    let.currency_types = await orderModel
      .find()
      .limit(limit)
      .skip((offset - 1) * limit);

    res.status(200).send({ data: currency_types });
  } catch (error) {
    console.log(error.message);
  }
}

async function findOne(req, res) {
  let { id } = req.params;
  try {
    let currency_type = await currency_typeModel.findById(id);
    res.status(200).send({ data: currency_type });
  } catch (error) {
    console.log(error.message);
  }
}

async function create(req, res) {
  let data = req.body;
  try {
    let currency_type = await currency_typeModel.create(data);
    res.status(200).send({ data: currency_type });
  } catch (error) {
    console.log(error.message);
  }
}

async function update(req, res) {
  let { id } = req.params;
  let data = req.body;
  try {
    let updateCurrency_type = currency_typeModel.findByIdAndUpdate(id, data);
    res.status(200).send({ data: updateCurrency_type });
  } catch (error) {
    console.log(error.message);
  }
}

async function remove(req, res) {
  let { id } = req.params;
  try {
    await currency_typeModel.findByIdAndDelete(id);
    res.status(200).send({ message: "Deleted currency_type" });
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