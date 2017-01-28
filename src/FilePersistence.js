/**
    ------------ ERROR CODES ------------   
    1001 - Invalid inputs
    1002 - Invalid filters
    1003 - Mandatory values not sent.
    1004 - Record already exists..
*/

/**
We assume the files that are used as data source for this activity reside in the file "files/students.txt"
*/

var Student = function(id, firstName, lastName, gender, totalMarks){
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.totalMarks = totalMarks;
};

/**
Method used to read students data from the file..

If no filters are given, return list of all the students details. 

Else, apply all the given filters. 

------------------
Schema of a filter..
------------------

filters contains list of filters that have to be applied on the students data. 

Each filter contains the following properties.. 

"key", "value", "optype".

** key and value are mandatory properties. 
Throw error in case they are missing. (Refer error codes at Page Top!)

Default value for optype = "EQ". 

List of valid optype -> EQ, NE, GT, LT, GTE, LTE 
(Equals, NotEquals, GreaterThan, LessThan, GreaterThanEquals, LessThanEquals)

Example filter --- 
[{
    "key" : "gender",
    "value": "male"
},{
    "key" : "totalMarks",
    "value": 90,
    "optype": "GTE"
}]
Return all the male students having marks greater than or equal to 90!!
*/
exports.getStudents = function (filters, callback) {

};

/**
Method is to create a new student in the data source (i.e, a file.)

student contains the required student's data. 

mandatory fields are id, lastName, firstName, gender and totalMarks. 

--valid values for gender are "male" and "female". 

--valid values for totalMarks is range 0 - 100. 

Throw appropriate errors for invalid values. (Refer error codes from the page top)
*/
exports.createStudent = function (student, callback) {

};