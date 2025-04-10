// Import modules
import mongoose from "mongoose"

// Create dish schema
const dishSchema = new mongoose.Schema({
    name: String,
    ingredients: String,
    preparationSteps: String,
    cookingTime: String,
    origin: String
})

// Create a model
export default mongoose.model("dishes", dishSchema)
