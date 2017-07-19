function getFilePath() {

    var path = require('path');
    return path.join(__dirname, '..', 'files');
}


var Arrays = function() {

    /**
     Utility function used to find the maximum element in the given array..

     The array is given as input.

     Return the max element of array in the callback in error first way.
     */
    this.findMax = function (array, callback) {


        if(array.length<=0){

            callback(null,null)
        }
        else {
            var max = array[0]
            for (var i = 0; i < array.length; i++) {

                if (array[i] > max) {

                    max = array[i];
                }
                else {

                    continue;
                }
            }
            callback(null, max)
        }

    };

    /**
     Utility function used to find maximum element of given arrays

     Each line in the file "files/arrays.txt" corresponds to a Array..

     Use the above mentioned function findMax to find max element in all the arrays..

     Test case fails if the findMax method is not used..

     Return list of max elements via the callback..

     Example input [[3, 6, 1], [5, 7, 8, 1], [5,8,3]] output [6, 8, 8]
     */
    this.getMaxArray = function (callback) {

        var self=this;
        var ans=[]
        var result;
        var path=require('path')
        var fs = require('fs');
        var file = path.join(__dirname, '..', 'files') + "/arrays.txt";
        var finput=fs.readFileSync(file).toString();
        var lines=finput.split(/\n/);
        for(var i=0;i<lines.length-1;i++){

            if(lines[i]==null||lines[i].trim()==null||lines[i]==''){

                ans.push(null)
            }else{
4
                var linearr=lines[i].trim().split(" ").map(Number);
                self.findMax(linearr,function (err,max) {

                    ans.push(max);
                });
            }
        }
        callback(null,ans)
    };
};

module.exports = Arrays;