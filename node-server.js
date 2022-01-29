const http = require("http");
http.createServer((req, res)=>{
    res.end("Hello from NodeJS server");
}).listen(3100);
console.log("Server is listening on 3100");