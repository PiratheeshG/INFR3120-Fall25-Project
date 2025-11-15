let mongoose = require("mongoose");

// create a model 

let mealModel = mongoose.Schema(
    {
    date: String,
    foodItem: String,
    consumptionTime: String,
	calorieAmount: Number,
	weightOfFood: String,
	notes: String
    },
    {
        collaction:"meals"
    }
);
module.exports=mongoose.model('Meal',mealModel);
