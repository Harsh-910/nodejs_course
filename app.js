const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head>Form</head>");
    res.write(`<body>
    <form action="/message" method="POST">
    <input type="text" name="msg"></input>
    <button type="submit">Send</button>
    </form>
    </body>`);
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const bodyParse = Buffer.concat(body).toString();
      console.log(bodyParse);
      const message = bodyParse.split("=");
      console.log('message',message)
      fs.writeFileSync("message.txt", message);
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }

  // res.setHeader('Content-Type','text/html')
  // res.write('<html>')
  // res.write('<head>My Node js</head>')
  // res.write('<body><h1>Nods js</h1></body>')
  // res.write('</html>')
  // res.end()

  // process.exit()
  // Close the program
});

server.listen(9000);
