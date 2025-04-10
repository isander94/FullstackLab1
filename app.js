// Import modules
import express from "express"
import dotenv from "dotenv"
import path from "path"
import dish from "./models/dish.js"
import connect from "./config/database.js"
import { fileURLToPath } from "url";
import { dirname } from "path";

// Define __filename and __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)

dotenv.config()

// Connect to database
connect()

// Create an app instance
const app = express()

// Middleware to allow the use of json parsing
app.use(express.json())

// Middleware for showing static web content
app.use(express.static(path.join(__dirname, "public")))

// Root route
app.get("/", async (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
})

// TO-DO: Mount routes

// Define port and start server
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})