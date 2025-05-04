const adminModel = require("../models/admin.model");

async function findAll(req, res) {
  let { limit, offset } = req.query;
  try {
    limit = limit ? limit : 10;
    offset = offset ? offset : 1;

    let.orders = await orderModel
      .find()
      .limit(limit)
      .skip((offset - 1) * limit);
  } catch (error) {
    console.log(error.message);
  }
}

async function findOne(req, res) {
    let { id } = req.params;
  try {
    let admin = await adminModel.findById(id);
    res.status(200).send({ data: admin});
  } catch (error) {
    console.log(error.message);
  }
}

async function create(req, res) {
    let data =  req.body;
  try {
    let admin = await adminModel.create(data);
    res.status(200).send({ data: admin});
  } catch (error) {
    console.log(error.message);
  }
}

async function update(req, res) {
    let { id } = erq.params;
    let data = req.body;
  try {
    let updateAdmin = adminModel.findByIdAndUpdate(id, data);
    res.status(200).send({data: updateAdmin});
  } catch (error) {
    console.log(error.message);
  }
}

async function remove(req, res) {
    let { id } = req.params;
  try {
    await adminModel.findByIdAndDelete(id);
    res.status(200).send({message: "Deleted admin"});
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = {
  findAll,
  findOne,
  create,
  update,
  remove,
};
