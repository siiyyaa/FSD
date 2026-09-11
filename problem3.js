const http=require('http');//import hyper text transfer protocol module from node js
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain','server':'Node.js'});//set response header
    res.end("Hello World!");//send response to client
    
});
const PORT=5000;//set port number
server.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});