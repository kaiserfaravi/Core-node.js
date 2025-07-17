
const path = require('path')
const fs = require('fs')

const inputArguments = process.argv.slice(2);
const text = inputArguments.join(" ");

if(!text){
    console.log("❌ no messages here");
    console.log("please provide a massage");
    process.exit(1);
}

const filepath = path.join(__dirname,"log.txt")
console.log(filepath);

fs.appendFile(filepath,text,{encoding:"utf-8"},()=>{
    console.log("added succesfully");
})