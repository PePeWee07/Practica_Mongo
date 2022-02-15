const express = require("express")
const morgan = require("morgan")
const cors = require("cors")

const config = require ('./config/index')

const BDConnection = require("./database/DBConnection")
const producRoutes = require("./routes/product.routes")
const customerRoutes = require("./routes/customer.routes")

async function startExpressServer(params) {
    const app = express();

    app.use(morgan("dev"))
    app.use(cors())

    app.use(express.json())

    const baseURL = '/api/v1'

    app.use(`${baseURL}/product`, producRoutes)

    app.use(`${baseURL}/customer`, customerRoutes)

    app.get("/", (req, res) =>{
        res.json({messge: 'Express hi'});
    });

    await BDConnection()

    // const PORT = 4800;
    // app.listen(PORT, ()=>{
    //     console.log(`Server work in http://localhost:${PORT}`)
    // });

    app.listen(config.port, ()=>{
        console.log(`Server work in http://localhost:${config.port}`)
    });
}
startExpressServer();