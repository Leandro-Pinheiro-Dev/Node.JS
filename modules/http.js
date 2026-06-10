const http = require("http");

const port = 8080;

const server = http.createServer((request, response) => {
  if (request.url === "/home") {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end("<h1>Home Page</h1>");
  }
  if (request.url === "/users") {
    const users = [
      {
        name: "Leandro Pinheiro",
        email: "Leandro10@doe.com",
      },
      {
        name: ":Maria Alice",
        email: "maria10@doe.com",
      },
    ];

    response.writeHead(200, { "content-type": "application/json" });
    response.end(JSON.stringify(users));
  } else {
    response.writeHead(404, { "Content-Type": "text/html" });
    response.end("<h1>404 - Página não encontrada</h1>");
  }
});

server.listen(port, () => {
  console.log(`Rodando na porta ${port}!`);
});
