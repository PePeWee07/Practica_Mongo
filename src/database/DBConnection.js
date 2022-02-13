const mongoose = require("mongoose")

// const url = "mongodb://127.0.0.1:27017/crm-clientes";
   const url = "mongodb+srv://Pepewee:Pepewee01@practicamongo.lscyx.mongodb.net/test/crm-clientes";

const DBconnection = async()=> {
    try{
        await mongoose.connect(url)
        console.log('BD is conected')
    }catch(error){
        console.log(error);
        throw new Error('Failed to initialize databse')
    }
}

module.exports = DBconnection;