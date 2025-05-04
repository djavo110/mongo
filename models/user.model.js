const {Schema, model} = require("mongoose");

let clientSchema = new Schema({
  full_name: {
    type: String,
    required: [true, "Full name is required"],
  },
  phone_number: {
    type: String,
    required: [true, "Phone number is required"],
    maxlength: [15, "Max length 15"],
  },
  address: {
    type: String,
    required: [true, "Adress is required"],
  },
  location: {
    type: String,
    required: [true, "Full name is required"],
  },
  email: {
    type: String,
    match: /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\?[^.\w])$)/gim,
  },
  orders:[
    {
        type: Schema.Types.ObjectId,
        ref: "order",
    },
  ],
}, 
{timestamps: true, versionKey: false}
);

let clientModel = model('client', clientSchema);

module.exports = clientModel;