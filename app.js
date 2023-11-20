const http = require('http');

const server=http.createServer((req,res)=>{
   const url=req.url;
   if(url==='/'){
    res.write('<html>')
    res.write('<head>Form</head>')
    res.write(`<body>
    <form action="/message" method="POST">
    <input type="text" name="msg"></input>
    <button type="submit">Send</button>
    </form>
    </body>`)
    res.write('</html>')
    return res.end()
   }

    // res.setHeader('Content-Type','text/html')
    // res.write('<html>')
    // res.write('<head>My Node js</head>')
    // res.write('<body><h1>Nods js</h1></body>')
    // res.write('</html>')
    // res.end()

    // process.exit()
    // Close the program
})

server.listen(9000);