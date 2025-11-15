let express = require('express')
let router = express.Router();
let mongoose = require('mongoose');
let Meal = require('../models/meal');

// get --> extract and read smth
// post --> post smth
// put --> edit/update some data
// delete --> delete the data
// crud --> create, read, update, delete

//read the data from the db
router.get('/',async(req,res,next)=>{
    try
    {
        const MealList = await Meal.find();
        //console.log(MealList);
        res.render('Meals/list',{
            title: 'Meals',
            MealList:MealList

        })

    }
    catch(err)
    {
        console.error(err);
    }
})

module.exports = router;
