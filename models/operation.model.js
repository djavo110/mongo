const { Schema, model } = require("mongoose");

let operationSchema = new Schema({
  operetion_date: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  order_id: {
    type: Schema.Types.ObjectId,
    ref: "order",
  },
  status_id: {
    type: Schema.Types.ObjectId,
    ref: "status",
  },
  admin_id: {
    type: Schema.Types.ObjectId,
    ref: "admin",
  },
},
{timestamps: true, versionKey: false}
);

let operationModel = model("operation", operationSchema);

module.exports = operationModel;