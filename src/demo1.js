/**
 * Created by deepak on 28-Feb-17.
 */
var fs = require('fs');
var path=require('path')
var st=[];
var filename = path.join(__dirname, '..', 'files') + '/students.txt';
fs.readFile(filename,'utf-8',function(err,data)
    {
        if(err){

            console.log(err);
            return;
        }
        var content=data;
        while(content.length>0){

            var ind1=content.indexOf('}');
            console.log(ind1);
            var temp=content.slice(0,ind1+1);
            console.log(temp);
            var d=JSON.parse(temp);
            console.log(d);
            st.push(d);
            content=content.slice(ind1+1);
        }
    });

console.log(st);


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
