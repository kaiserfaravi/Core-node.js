const fs = require('fs')



const text = "learning Node js async w/r";

fs.writeFile("./hello.txt",text,{encoding:"utf8"},(err,data)=>{
    if(err){
        console.log("ohh noo");
    }
})




fs.readFile("./hello.txt",{encoding:"utf8"},(err,data)=>{
    if(err){
        console.log("something error",err);
        return;
    }
    else{
        console.log(data);
    }
})