const EventEmitter = require("events");
// const emitter = new EventEmitter(); //通过类实现

let url = "http://mylogger.io/log";

class Logger extends EventEmitter {
  log(message) {
    //send Http request;
    console.log(message);
    //Raise an Event ,Making a noise or Produce sth
    this.emit("messageLogged", { id: 1, url: "http://" });
  }
}

// module.exports.log = log;
module.exports = Logger;
module.exports.endPoint = url;
