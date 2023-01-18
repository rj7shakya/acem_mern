// const map = require("./7_map");
// console.log(map);

// const os = require("os");
// console.log(os.totalmem());

const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("hello world");
    res.end();
  }
});

server.listen("3000");
console.log("listening to port 3000");

server.on("connection", () => {
  console.log("new connection");
});
