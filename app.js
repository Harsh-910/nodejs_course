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
      const message = bodyParse.split("=")[1];
      console.log("message", message);
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
});

server.listen(9000);
