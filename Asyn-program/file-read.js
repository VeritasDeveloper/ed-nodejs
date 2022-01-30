
const fs = require("fs");
var dataFromFile;

const printDataFunction = function printData(err, data){
    if (err) {
        console.log(err);
    }else{
        dataFromFile = data;
        console.log(data.toString());
    }
}

fs.readFile("data.txt", printDataFunction);
console.log("Task 2");
console.log("Task 3");