const fs = require('fs')
fs.readFile("./hello.txt",{encoding:"utf8"},(err,data)=>{
    if(err){
        console.log("something error",err);
        return;
    }
    else{
        console.log(data);
    }
})