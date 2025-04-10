// Import modules
import express from "express"
import dotenv from "dotenv"
import path from "path"
import dish from "./models/dish.js"
import connect from "./config/database.js"

dotenv.config()

// Connect to database
connect()

// Create an app instance
const app = express()

// Middleware to allow the use of json parsing
app.use(express.json())

// Define port and start server
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})