const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 3002;
const PostData = require('./models/post');
const cors = require('cors')


mongoose.connect('mongodb+srv://bhavesh:bhavesh%4097@cluster0.bjx9m.mongodb.net/instaclone?retryWrites=true&w=majority')
.then(()=>{console.log('connected to DB')})
.catch((err)=>{console.log(err)})
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use(cors())

app.get('/postview',(req,res)=>{
    PostData.find()
    .then((data)=>{
        res.send({data})
    })
})
app.post('/addpost',(req,res)=>{
    
    PostData.create({name:req.body.name,location:req.body.location,description:req.body.description,likes:req.body.likes,image:req.body.image})
    .then((data)=>{
        res.json('User added successfully')
    })
    .catch((err)=> console.log(err))
    })

    
    
app.listen(port,()=>{
    console.log('connected to Server')
})