const express = require('express');
var router = express.Router();
var ObjectID = require('mongoose').Types.ObjectId;

var { Employee } = require('./models/employee');

router.get('/',(req,res)=>{
	Employee.find((err, docs)=>{
		if(!err){res.send(docs);}
		else {console.log('error in retrieving',err)}
		});
});
router.get('/:id',(req,res)=>{
	if(!ObjectID.isValid(req.params.id))
		return res.status(400).send('No record with given ID');
		
	Employee.findById(req.params.id,(err,doc)=>{
		if(!err){res.send(doc);}
		else {console.log('error in retrieving',err)}
	});
	
});
router.put('/:id',(req,res)=>{
	if(!ObjectID.isValid(req.params.id))
		return res.status(400).send('No record with given ID');
	
	var emp = {
		firstName: req.body.firstName,
		age: req.body.age,
        native: req.body.native,
        fullName : req.body.fullName,
        educationDet : req.body.educationDet,
        certifications : req.body.certifications,
        interest : req.body.interest,
        skills : req.body.skills,
        resumeObjective : req.body.resumeObjective,
        experience : req.body.experience,
        personalDet : req.body.personalDet
	};
	Employee.findByIdAndUpdate(req.params.id,{ $set: emp },{ new : true },(err,doc)=>{
		if(!err){res.send(doc);}
		else {console.log('error in updating',err)}		
	});
	
});

router.delete('/:id',(req,res)=>{
	if(!ObjectID.isValid(req.params.id))
		return res.status(400).send('No record with given ID');
		
	Employee.findByIdAndRemove(req.params.id,(err,doc)=>{
		if(!err){res.send(doc);}
		else {console.log('error in updating',err)}	
	});

});

router.post('/',(req,res)=>{
	var emp = new Employee({
		firstName: req.body.firstName,
		age: req.body.age,
        native: req.body.native,
        fullName : req.body.fullName,
        educationDet : req.body.educationDet,
        certifications : req.body.certifications,
        interest : req.body.interest,
        skills : req.body.skills,
        resumeObjective : req.body.resumeObjective,
        experience : req.body.experience,
        personalDet : req.body.personalDet
        
		});
		emp.save((err,doc)=>{
			if(!err){res.send(doc);}
			else {console.log('Error in Employee Save',errr);}
			});
});

module.exports = router;
