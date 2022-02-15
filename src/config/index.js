const dotenv = require('dotenv')

dotenv.config()

const config = {
    mongoUri: process.env.MONGO_URI,
    port: process.env.PORT
}

module.exports = config