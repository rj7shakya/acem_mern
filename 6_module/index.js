// const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.write("hello world");
//     res.end();
//   } else if (req.url === "/home") {
//     res.write("welcome to my home");
//     res.end();
//   }
// });

// server.listen(3000);
// console.log("listening at port 3000");

// // server.on("connection", () => {
// //   console.log("new connection");
// // });

// const hello = require("./first");

const { add, sub } = require("./math");

console.log(add(2, 3));
