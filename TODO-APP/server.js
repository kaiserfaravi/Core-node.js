const http = require('http')

const server = http.createServer((req,res)=>{

   console.log(req.url,req.method);
  
 if(req.url==='/todos' &&  req.method==='get'){
    res.end("welcome to the to do server by me")
 }
 else if(req.url ==="/todos/create-todos" &&  req.method==="POST"){
    res.end("todo created succesfully")
 }
 else{
    res.end("todo not found")
 }

})

server.listen(5000,'127.0.0.1',()=>{
    console.log('running new todo apps');
})

