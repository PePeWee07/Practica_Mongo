const Customer = require("../models/Customer");

const getCustomer = async (req, res) => {
    try{

        const customers =  await Customer.find()

       return res.status(202).json({
            ok: true,
            message: "",
            customers
       })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            ok: false,
            message: "Ocurrio un error"
       })
    }
};

const createCustomer = async (req, res) => {
    try{
        const { name, email, company, phone } = req.body;

        const newCustomer =  new Customer({name, email, company, phone})

        const customerSaved =  await newCustomer.save()

       return res.status(202).json({
            ok: true,
            message: "Cliente guardado",
            customer: customerSaved
       })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            ok: false,
            message: "Ocurrio un error"
       })
    }
};

const updateCustomer = async (req, res) => {
    try{
        const { id, name, email, company, phone } = req.body;

        const customerExist = await Customer.exists({_id: id})

        if(!customerExist) return res.status(404).json({
            ok: false,
            message: "No existe el Cliente"
       })

       const customerExistsWithEmail = await Customer.exists({email});

       if(customerExistsWithEmail) return res.status(404).json({
        ok: false,
        message: "El coreo no se encuentra registrado"
        })

       const customerUpdated = await Customer.findByIdAndUpdate(
        id,
        {
            $set: {name, email, company, phone}
        },
       {new: true}
       );

       return res.status(202).json({
            ok: true,
            message: "Cliente actualizado",
            customer: customerUpdated
       })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            ok: false,
            message: "Ocurrio un error"
       })
    }
};

const deleteCustomer = async (req, res) => {
    try{
        const { id } = req.body;

        const customerExist = await Customer.exists({_id: id})

        if(!customerExist) return res.status(404).json({
            ok: false,
            message: "No existe el Cliente"
       })

       const customerDeleted = await Customer.deleteOne({_id:id})

       return res.status(200).json({
            ok: true,
            message: "Cliente Elimindo",
            customer: {_id: id, ...customerDeleted}
       })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            ok: false,
            message: "Ocurrio un error"
       })
    }
};


module.exports = {getCustomer, createCustomer, updateCustomer, deleteCustomer}