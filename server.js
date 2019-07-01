const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello World");
    res.end();
  } else if (req.url === "/api/courses") {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
}); // 使用EXPRESS代替原来HTTP模块更好

//真实编程中是不会发起connection事件并处理的，太低级
// server.on("connection", socket => {
//   console.log("New connection...");
// });

server.listen(3010);

console.log("Listening on port 3000...");
