const router=require('express').Router();
let Filiere=require('../models/filiere.model');

router.route('/').get((req,res)=>{
    Filiere.find()
    .then(filieres=>res.json(filieres))
    .catch(err=>res.status(400).json('Error : '+err))
})

router.route('/add').post((req,res)=>{
   const nomFiliere=req.body.nomFiliere;
   const libelle=req.body.libelle;
    

    const newFiliere=new Filiere({
       nomFiliere,
       libelle,
    });

    newFiliere.save()
    .then(()=>res.json('Filiere addd'))
    .catch(err=>res.status(400).json('Error'+err));
 });

 
 router.route('/:id').get((req,res)=>{
    Filiere.findById(req.params.id)
    .then(filiere=>res.json(filiere))
    .catch(err=>res.status(400).json('Error'+err));
 });
 
 router.route('/delete/:id').delete((req,res)=>{
    Filiere.findByIdAndDelete(req.params.id)
    .then(filiere=>res.json("Is deletet"))
    .catch(err=>res.status(400).json('Error'+err));
 });
 
 router.route('/update/:id').post((req,res)=>{
    Filiere.findById(req.params.id)
    .then(filiere=>{
    filiere.nomFiliere=req.body.nomFiliere;
    filiere.libelle=req.body.libelle;
    
 
    filiere.save()
    .then(()=>res.json('Filiere updated'))
    .catch(err=>res.status(400).json('Error'+err));
 })
 });


module.exports=router