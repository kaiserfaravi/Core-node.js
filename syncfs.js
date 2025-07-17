const fs = require('fs')



const text = "learrning file system"
 fs.writeFileSync("./hello.txt",text)
 
const data = fs.readFileSync("./hello.txt",{encoding:"utf8"})
console.log(data);