const { trim, type } = require('jquery');
letmongoose = require('mongoose');
let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose')
const { collection } = require('./meal');


let User = mongoose.Schema({
    username:
    {
        type:String,
        default:"",
        trim:true,
        required:'Username is required'
    },
    password:
    {
        type:String,
        default:"",
        trim:true,
        required:'Password is required'
    },
    email:
    {
        type:String,
        default:"",
        trim:true,
        required:'Email is required'
    },
    displayName:
    {
        type:String,
        default:"",
        trim:true,
        required:'displayName is required'
    },
    created:
    {
        type:Date,
        default:Date.now
    },
    updated:
    {
        type:Date,
        default:Date.now
    }
},
{
    collection:"user"
}
)
let options = ({MissingPasswordError:'Wrong/Missing Passowrd'});
User.plugin(passportLocalMongoose,options);
module.exports.User = mongoose.model('User',User);