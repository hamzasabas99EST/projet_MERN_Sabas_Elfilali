const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const filiereShema=Schema({
    nomFiliere:{type:String,required:true},
    libelle:{type:String,required:true}
});

const Filiere=mongoose.model('Filiere',filiereShema);
module.exports=Filiere;