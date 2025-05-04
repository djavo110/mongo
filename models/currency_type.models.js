const { model, Schema} = require("mongoose");

let currency_typeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },

    desc: {
        type: String,
        required: true,
    },
}
{ timestamps: true, versionKey: false }
);

let currency_typeModel = model("currency_type", currency_typeSchema);

module.exports = currency_typeModel;