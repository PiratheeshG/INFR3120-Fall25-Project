let express = require('express')
let router = express.Router();
let mongoose = require('mongoose');

// CRUD --> Read

let Meal = require('../models/meal');
function requireAuth(req,res,next)
{
    if(!req.isAuthenticated())
    {
        return res.redirect('/login')
    }
    next();
}


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
        console.log(MealList);
        res.render('Meals/list',{
            title: 'Meals',
            MealList:MealList,
            displayName: req.user?req.user.displayName:""

        })

    }
    catch(err)
    {
        console.error(err);
        res.render('Meals/list',{
            error:'error on server'

        })
    }
})
// get route for add page -- create op
router.get('/add',async(req,res,next)=>{
    try{
        res.render('Meals/add',{
            title:'Add a Meal',
            displayName: req.user?req.user.displayName:""
        })
    }
    catch(err)
    {
        console.error(err);
        res.render('Meals/add',{
            error:'error on server'

        })
    }
})
// post route for processing add page --create op
router.post('/add',async(req,res,next)=>{
    try
    {
        let newMeal = Meal({
            "date":req.body.date,
            "foodItem":req.body.foodItem,
            "consumptionTime":req.body.consumptionTime,
            "calorieAmount":req.body.calorieAmount,
            "weightOfFood":req.body.weightOfFood,
            "notes":req.body.notes

        });
        Meal.create(newMeal).then(()=>{
            res.redirect('/meals')
        })
    } 
    catch(err)
    {
        console.error(err);
        res.render('Meals/add',{
            error:'error on server'

        })
    }   
})
// get route for edit page -- update op
router.get('/edit/:id',async(req,res,next)=>{
    try
    {
        const id = req.params.id;
        const mealToEdit = await Meal.findById(id);
        res.render("Meals/edit",
            {
                title: 'Edit Meal', 
                Meal: mealToEdit,
                displayName: req.user?req.user.displayName:""
            }

        )
    }
    catch(err)
    {
        console.log (err);
        next(err);
    }
})
// post route for processing edit page --update op
router.post('/edit/:id',async(req,res,next)=>{
    try{
        let id = req.params.id;
        let updateMeal = Meal({
            "_id":id,
            "date":req.body.date,
            "foodItem":req.body.foodItem,
            "consumptionTime":req.body.consumptionTime,
            "calorieAmount":req.body.calorieAmount,
            "weightOfFood":req.body.weightOfFood,
            "notes":req.body.notes
        })
        Meal.findByIdAndUpdate(id, updateMeal).then(()=>{
            res.redirect("/meals")
        })
    }
    catch(err)
    {
        console.log (err);
        next(err);
    }
})
// get route for deleting items -- delete op
router.get('/delete/:id',async(req,res,next)=>{
    try{
        let id = req.params.id;
        Meal.deleteOne({_id:id}).then(()=>{
            res.redirect("/meals")
        })
    }
    catch(err)
    {
        console.log (err);
        next(err);
    }
})
module.exports = router;
