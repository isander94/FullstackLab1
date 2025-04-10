// Import modules
const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config()

// Connect to database
const conn = async () => {
    try {
        await mongoose.connect(process.env.CONNECTION_URL)
        console.log("Database connected")
    }
    catch(err) {
        console.error(err.message)
    }
}

module.exports = conn