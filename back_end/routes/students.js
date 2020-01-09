 const router=require('express').Router();
 let Student=require('../models/student.model');

 router.route('/all').get((req,res)=>{
    Student.find()
    .then(students=>res.json(students))
    .catch(err=>res.status(400).json('Error'+err));
 });

 router.route('/add').post((req,res)=>{
    const cin=req.body.cin;
    const cne=req.body.cne;
    const prenom=req.body.prenom;
    const nom=req.body.nom;
    const nomFiliere=req.body.nomFiliere;
    const date_n=req.body.date_n;

    const newStudent=new Student({
        cin,
        cne,
        prenom,
        nom,
        nomFiliere,
        date_n
    });

    newStudent.save()
    .then(()=>res.json('Student addd'))
    .catch(err=>res.status(400).json('Error'+err));
 });

router.route('/:id').get((req,res)=>{
   Student.findById(req.params.id)
   .then(student=>res.json(student))
   .catch(err=>res.status(400).json('Error'+err));
});

router.route('/listStudent/:nomFiliere').get((req,res)=>{
   Student.find({nomFiliere:req.params.nomFiliere})
   .then(student=>res.json(student))
   .catch(err=>res.status(400).json('Error'+err));
});

router.route('/searchStudent/:q/:nomFiliere').get((req,res)=>{
   Student.find({$or:[{'cin':req.params.q},{'cne':req.params.q},{'nom':req.params.q},{'prenom':req.params.q}]}).find({'nomFiliere':req.params.nomFiliere})
   .then(student=>res.json(student))
   .catch(err=>res.status(400).json('Error'+err));
});


router.route('/delete/:id').delete((req,res)=>{
   Student.findByIdAndDelete(req.params.id)
   .then(student=>res.json("Is deletet"))
   .catch(err=>res.status(400).json('Error'+err));
});

router.route('/update/:id').post((req,res)=>{
   Student.findById(req.params.id)
   .then(student=>{
      student.cin=req.body.cin;
      student.cne=req.body.cne;
      student.prenom=req.body.prenom;
      student.nom=req.body.nom;
      student.date_n=req.body.date_n;
      student.nomFiliere=req.body.nomFiliere;

   student.save()
   .then(()=>res.json('Student updated'))
   .catch(err=>res.status(400).json('Error'+err));
})
});

 module.exports=router;