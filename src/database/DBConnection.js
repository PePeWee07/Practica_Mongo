const mongoose = require("mongoose")

// const url = "mongodb://127.0.0.1:27017/crm-clientes";
    const config = require ('../config/configVar')

const DBconnection = async()=> {
    try{
        await mongoose.connect(config.mongoUri)
        console.log('BD is conected')
    }catch(error){
        console.log(error);
        throw new Error('Failed to initialize databse')
    }
}

module.exports = DBconnection;