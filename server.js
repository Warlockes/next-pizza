const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("assets/db.json");
const midlewares = jsonServer.defaults({
  static: "./build",
});

const PORT = process.env.PORT || 3001;

server.use(midlewares);
server.use(router);

server.listen(PORT, () => {
  console.log("Server is running!");
});
