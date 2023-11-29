const http = require("http");

const routes = require("./routing");

console.log(routes.text)

const server = http.createServer(routes.handler);

server.listen(9000);
