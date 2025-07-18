const http = require('http');
const path = require('path');
const fs = require('fs')


const filepath = path.join(__dirname,'./DB/todo.json')

const server = http.createServer((req,res)=>{

    const data = fs.readFileSync(filepath,{encoding:"utf-8"})

  
 if(req.url==='/todos' &&  req.method==='GET'){
    
    res.writeHead(202,{
        "content-type":"application/json",
        
    })

    // res.setHeader("content-type","text/plain")
    // res.setHeader("name","kaiser")
    // res.statusCode = 303;

    res.end(data)
 }
 else if(req.url ==="/todos/create-todo" &&  req.method==="POST"){

   let data =''
   req.on("data",(chunk)=>{
      data = data+ chunk;

   })

   req.on("end",()=>{
   
      const {title,body} = JSON.parse(data);
      const createdAt= new Date().toLocaleString()
      const allTodos = fs.readFileSync(filepath,{encoding:"utf-8"})
     
      
      const parsedAllTodos = JSON.parse(allTodos)

       parsedAllTodos.push({title,body,createdAt});

      fs.writeFileSync(filepath,JSON.stringify(parsedAllTodos,null,2),{encoding:"utf-8"})
       res.end(JSON.stringify({title,body,createdAt},null,2))
   })
   
 }
 else{
    res.end("todo not found")
 }

})

server.listen(5000,'127.0.0.1',()=>{
    console.log('running new todo apps');
})

