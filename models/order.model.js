const { model, Schema } = require("mongoose");

let orderSchema = new Schema(
  {
    product_link: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    summa: {
      type: Number,
      required: true,
    },
    truck: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },

    client_id: {
      type: Schema.Types.ObjectId,
      ref: "client",
      validation: {
        validate: (email) => {
          return `^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$`.test(email);
        },
      },
    },
  },
  { timestamps: true, versionKey: false }
);

let orderModel = model("order", orderSchema);

module.exports = orderModel;
