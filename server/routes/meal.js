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
        res.render('Meals/list',{
            error:'error on server'

        })
    }
})
// get route for add page -- create op
router.get('/add',async(req,res,next)=>{
    try{
        res.render('Meals/add',{
            title:'Add Meal'
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
// post route for processing add page --create op
router.post('/add',async(req,res,next)=>{
    
})
// get route for edit page -- update op
router.get('/edit/:id',async(req,res,next)=>{
    
})
// post route for processing edit page --update op
router.post('/edit/:id',async(req,res,next)=>{
    
})
// get route for deleting items -- delete op
router.get('/delete/:id',async(req,res,next)=>{
    
})
module.exports = router;
