const Product = require("../models/Product");

const getProducts = async (req, res) => {
    try{

        const products =  await Product.find()

       return res.status(202).json({
            ok: true,
            message: "",
            products
       })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            ok: false,
            message: "Ocurrio un error"
       })
    }
};

const createProducts = async (req, res) => {
    try{
        const { name, stock, price } = req.body;

        const newProduct =  new Product({name, stock, price})

        const productSaved =  await newProduct.save()

       return res.status(202).json({
            ok: true,
            message: "Producto guardado",
            product: productSaved
       })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            ok: false,
            message: "Ocurrio un error"
       })
    }
};

const updateProducts = async (req, res) => {
    try{
        const { id, name, stock, price } = req.body;

        const userExist = await Product.exists({_id: id})

        if(!userExist) return res.status(404).json({
            ok: false,
            message: "No existe el producto"
       })

       const productUpdated = await Product.findByIdAndUpdate(
        id,
        {
            $set: {name, stock, price}
        },
       {new: true}
       );

       return res.status(202).json({
            ok: true,
            message: "Producto actualizado",
            product: productUpdated
       })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            ok: false,
            message: "Ocurrio un error"
       })
    }
};

const deleteProducts = async (req, res) => {
    try{
        const { id } = req.body;

        const userExist = await Product.exists({_id: id})

        if(!userExist) return res.status(404).json({
            ok: false,
            message: "No existe el producto"
       })

       const productDeleted = await Product.deleteOne({_id:id})

       return res.status(200).json({
            ok: true,
            message: "Producto Elimindo",
            product: {_id: id, ...productDeleted}
       })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            ok: false,
            message: "Ocurrio un error"
       })
    }
};

module.exports = {getProducts, createProducts, updateProducts, deleteProducts}
