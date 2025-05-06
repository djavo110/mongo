const { model, Schema } = require("mongoose");

let adminSchema = new Schema(
  {
    full_name: {
      type: String,
      required: true,
      maxLength: 15,
      minLength: 4,
    },

    user_name: {
      type: String,
      required: true,
    },

    user_name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },

    phone_number: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      validation: {
        validate: (email) => {
          return `^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$`.test(email);
        },
      },
    },

    tg_link: {
      type: String,
      required: true,
    },

    token: {
      type: String,
      required: true,
    },

    is_creator: {
      type: String,
      required: true,
    },

    is_active: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

let adminModel = model("admin", adminSchema);

module.exports = adminModel;
