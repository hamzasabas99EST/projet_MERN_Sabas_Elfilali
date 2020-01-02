const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const StudentShema=new Schema({
    cin:{type:String,required:true},
    cne:{type:String,required:true},
    prenom:{type:String,required:true},
    nom:{type:String,required:true},
    nomFiliere:{type:String,required:true},
    date_n:{type:Date,required:true}
});

const Student=mongoose.model('Student',StudentShema);

module.exports=Student;