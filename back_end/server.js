

const express=require('express');
const mongoose=require('mongoose');
const cors = require('cors');
const app=express();
const path = require('path');

require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname,'./build')));

// Connect to the db mongodb://localhost:27017/projet
const url   =process.env.ATLAS_URI;
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex:true,
});
const connection=mongoose.connection;
connection.once('open',()=>{
  console.log("Mongo db is seccessfully");
})

//End 

app.get('/' ,(req,res)=>{
  res.sendFile(path.join(__dirname,'./build/index.html'))
})

const studentRouter=require('./routes/students');
app.use('/students',studentRouter);

const filiereRouter=require('./routes/filieres');
app.use('/filieres',filiereRouter);
const adminRouter=require('./routes/admins');
app.use('/admins',adminRouter);


app.listen(3017,()=>{
    console.log("server is ready");
})