const mongoose = require('./study_db'),
    Schema = mongoose.Schema;

const Study_Schema = new Schema({
    ID : String,
	time : String,
	name: String,
    gender: String,
    studentId: String,
    email: String,
    applicationTime: String,
    degree: String,
    grade: String,
    ranking: String,
    professor: String,
    paper: String,
    paperTopic: String,
    firstSchool: String,
    secondSchool: String,
    thirdSchool: String,
    research: String,
    scope: String,
    admissionTime: String,
    professorHoped: String, 
    Facebook: String,
    Linkedln: String,
    else: String
})

module.exports = mongoose.model('User_Study',Study_Schema);
