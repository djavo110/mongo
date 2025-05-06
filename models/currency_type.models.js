const { model, Schema } = require("mongoose");

let currency_typeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      maxLength: 15,
      minLength: 4,
    },

    desc: {
      type: String,
      required: true,
      validation: {
        validate: (email) => {
          return `^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$`.test(email);
        },
      },
    },
  },
  { timestamps: true, versionKey: false }
);

let currency_typeModel = model("currency_type", currency_typeSchema);

module.exports = currency_typeModel;
