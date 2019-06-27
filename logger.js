let url = "http://mylogger.io/log";

log = message => {
  //send Http request;
  console.log(message);
};

module.exports.log = log;
module.exports.endPoint = url;
