const requestHandler = (req, res) => {
  const method = req.method;
  const url = req.url;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>Hello NodeJS</h1>");
    res.write("<html>");
    res.write("<head>Form</head>");
    res.write(`<body>
  <form action="/create-user" method="POST">
  <input type="text" name="username"></input>
  <button type="submit">Send</button>
  </form>
  </body>`);
    res.write("</html>");
    return res.end();
  }
  if (url === "/user") {
    res.setHeader("Content-Type", "text/html");
    res.write("<ul>");
    res.write("<li>User 1</li>");
    res.write("<li>User 2</li>");
    res.write("<li>User 3</li>");
    res.write("</ul>");
    return res.end();
  }
  if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", (chunks) => {
      body.push(chunks);
    });
    req.on("end", () => {
      let data = Buffer.concat(body).toString();
      console.log(data);
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
};

module.exports = requestHandler;
