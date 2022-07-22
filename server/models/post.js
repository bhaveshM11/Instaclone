const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    name:String,
    location:String,
    description:String,
    likes:Number,
    image:{
        type:String,
        required:true,
    }
})
const PostData = new mongoose.model('userdata',Schema)
module.exports = PostData;