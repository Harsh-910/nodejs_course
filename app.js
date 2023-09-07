const http = require('http');

const server=http.createServer((req,res)=>{
    console.log(req);

    process.exit()
    // Close the program
})

server.listen(9000);