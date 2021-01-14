const mongoose = require('mongoose');

var fullNameObj = {
	"firstName": {type : String},
	"lastName":  {type : String}
  }
var postG = {
	"postGDegree" :{type : String},
	"postGName" :{type : String},
	"postGYear" :{type : String},
	"postGGrade" :{type : String}
}
var bachD = {
	"bachDDegree" :{type : String},
	"bachDName" :{type : String},
	"bachDYear" :{type : String},
	"bachDGrade" :{type : String}
}
var junorCLG = {
	"junorCLGDegree" :{type : String},
	"junorCLGName" :{type : String},
	"junorCLGYear" :{type : String},
	"junorCLGGrade" :{type : String}
}
var educationDetObj = {
	"PG" : { type : postG},
	"UG" : { type : bachD },
	"jrclg":{type : junorCLG }
}
var certificationsObj = [];
var interestObj = [];
var skillsObj = [];
var resumeObj = [];
var experienceObj ={
	"year" : String,
	"projectName" : String,
	"projectDesc" : String,
}
var personalDetObj = {
	"firstName":String,
	"lastName":String,
	"address":String,
	"phone":String,
	"linkedInProfile":String

}
var experienceObjArray = [experienceObj];
var Employee = mongoose.model('Employee',{
	firstName : { type : String },
	age : { type : Number },
	native : { type : String },
	fullName : {type : fullNameObj},
	educationDet : { type : educationDetObj },
	certifications : { type: certificationsObj },
	interest : { type : interestObj},
	skills : {type : skillsObj},
	resumeObjective : {type : resumeObj},
	experience : {type : experienceObjArray},
	personalDet : {type : personalDetObj}
});
module.exports = { Employee	} ;
