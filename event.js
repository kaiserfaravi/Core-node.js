const EventEmitter = require("node:events")
class SchoolBell extends EventEmitter{}
const scholBell = new SchoolBell()
scholBell.on("ring",()=>{
    console.log("ringing");
}) 
scholBell.emit("ring")