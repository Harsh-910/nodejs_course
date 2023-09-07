const http = require('http');

const server=http.createServer((req,res)=>{
    // console.log(req);

    console.log('url',req.url)
    console.log('header',req.headers)
    console.log('method',req.method)

    res.setHeader('Content-Type','text/html')
    res.write('<html>')
    res.write('<head>My Node js</head>')
    res.write('<body><h1>Nods js</h1></body>')
    res.write('</html>')
    res.end()

    // process.exit()
    // Close the program
})

server.listen(9000);