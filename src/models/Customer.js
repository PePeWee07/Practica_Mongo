const  {Schema, model} = require("mongoose");

const CustomerSchema = new Schema({
    name: {
        type: String,
        required: true,
        uppercase: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        uppercase: true
    },
    company: {
        type: String,
        required: true,
        uppercase: true
    },
    phone: {
        type: String,
        default: 0
    }
    
},
{
    timestamps: true,
    versionKey: false
})

module.exports = model("Customer", CustomerSchema, "Customers");