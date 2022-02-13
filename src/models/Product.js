const { Schema, model } =  require("mongoose")

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true,
        uppercase: true,
        trim: true
    },
    stock: {
        type: Number,
        default: 0
    },
    price: {
        type: Number,
        required: true
    }
},
{
    timestamps: true,
    versionKey: false
})

module.exports = model('Product', ProductSchema, 'Products')