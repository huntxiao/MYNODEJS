const path = require("path");
const os = require("os");
const fs = require("fs");
const EventEmitter = require("events");

// const emitter = new EventEmitter(); //通过类实现

const Logger = require("./logger");
const logger = new Logger();

//Register a listener
logger.on("messageLogged", arg => {
  console.log("Listener Called", arg);
});
logger.log("message");

// var filesSync = fs.readdirSync("./");

// fs.readdir("$", (err, files) => {
//   if (err) console.log("Error", err);
//   //异步方法
//   else console.log("Result", files);
// });

//node has no window object
