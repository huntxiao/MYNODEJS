const logger = require("./logger");
const path = require("path");
const os = require("os");
const fs = require("fs");
const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.console.log(filesSync);
var filesSync = fs.readdirSync("./");
fs.readdir("$", (err, files) => {
  if (err) console.log("Error", err);
  else console.log("Result", files);
});
// console.log(filesdir);

//node has no window object
