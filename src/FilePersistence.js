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
    optype = "EQ";
    validOptypes = ['EQ', 'NE', 'GT', 'LT', 'GTE', 'LTE'];
    var fs = require('fs');
    var path = require('path');
    var file = path.join(__dirname, '..', 'files') + "/students.txt";
    input = fs.readFileSync(file).toString().replace('\r', '').split('\n').filter(Boolean);
    input = input.map(JSON.parse);
    output = input;
    if(filters == null){
        callback(null, input);
        return;
    }
    for(i=0; i<filters.length; i++){
        filter = filters[i];
        if(!('key' in filter) || !('value' in filter)){

            callback(JSON.parse('{"code":1003}'));
            return;
        }
        if('optype' in filter && !(validOptypes.includes(filter['optype']))){

            callback(JSON.parse('{"code":1002}'));
            return;
        }
    }

    for(i=0; i<filters.length; i++){
        filter = filters[i];
        if(!('optype' in filter)){
            console.log(filter);
            console.log(output);
            output = output.filter(function(x){
                return x[filter['key']] == filter['value'];
            });

        }
        else{
           op = filter['optype'];
            
                if(op=='EQ')
                    output = output.filter(function(x){
                        return x[filter['key']] == filter['value'];
                    });
                  
                else if(op=='NE')
                    output = output.filter(function(x){
                        return x[filter['key']] != filter['value'];
                    });
                else if(op=='GT')
                    output = output.filter(function(x){
                        return x[filter['key']] > filter['value'];
                    });
                  
               else if(op=='LT')
                    output = output.filter(function(x){
                        return x[filter['key']] < filter['value'];
                    });
                    
                else if(op=='LTE')
                    output = output.filter(function(x){
                        return x[filter['key']] <= x[filter['value']];
                    });
                else if(op=='GTE')
                    output = output.filter(function(x){
                        return x[filter['key']] >= filter['value'];
                    });
                else{
                    callback(JSON.parse('{"code":1002}'));
            }
        }
    }
    callback(null, output);

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
    var fs = require('fs');
    var path = require('path');
    var file = path.join(__dirname, '..', 'files') + "/students.txt";
    if(student.gender != 'male' && student.gender != 'female'){
        callback(JSON.parse('{"code":1001}'));
        return;
    }
    if(student.totalMarks < 0 || student.totalMarks > 100){
        callback(JSON.parse('{"code":1001}'));
        return;
    }
    input = fs.readFileSync(file).toString().replace('\r', '').split('\n').filter(Boolean);
    input = input.map(JSON.parse);
    if(student in input){
        callback(JSON.parse('{"code":1004}'));
        return;
    }
    console.log(input);
    for(i=0; i<input.length; i++){
        if(input[i].id == student.id){
            callback(JSON.parse('{"code":1004}'));
            return;
        }
    }

    fs.appendFileSync(file, JSON.stringify(student) + '\n');
    callback(null);


};