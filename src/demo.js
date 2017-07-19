/**
 * Created by deepak on 28-Feb-17.
 */
 var Student = function(id, firstName, lastName, gender, totalMarks){
    this.id = id;
	this.firstName = firstName;
	this.lastName = lastName;
	this.gender = gender;
    this.totalMarks = totalMarks;
}
 var student = new Student(32, "FirstName", "LastName", "male", 60); 
 console.log(student);

 var fs = require('fs');
fs.writeFile("students.txt",JSON.stringify(student), function(err) {
    if(err) {
        return console.log(err);
    }

    //console.log("The file was saved!");
}); 