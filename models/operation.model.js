const { Schema, model } = require("mongoose");

let operationSchema = new Schema(
  {
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
      validation: {
        validate: (email) => {
          return `^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$`.test(email);
        },
      },
    },
  },
  { timestamps: true, versionKey: false }
);

let operationModel = model("operation", operationSchema);

module.exports = operationModel;