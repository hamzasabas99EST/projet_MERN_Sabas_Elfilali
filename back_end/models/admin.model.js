const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const AdminShema=Schema({
   username:{type:String,required:true},
   password:{type:String,required:true}
 
});

const Admin=mongoose.model('Admin',AdminShema);
module.exports=Admin;