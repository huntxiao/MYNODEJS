const express = require("express");
const Joi = require("joi"); //返回值为class
const helmet = require("helmet"); //help secure by set header of http
const morgan = require("morgan"); //help log in console
const app = express();

console.log(`NODE_ENV:${process.env.NODE_ENV}`);
console.log(`app:${app.get("env")}`);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public")); //visited by localhost:3000/readme.text
app.use(helmet());
// app.use(morgan("tiny"));

if (app.get("env") === "development") {
  app.use(morgan("tiny"));
  console.log("Morgan enabled");
}

//Midlleware
app.use(function(req, res, next) {
  console.log("logging...");
  next(); //Control rights transfer to next Middleware
});

app.use(function(req, res, next) {
  console.log("Athenticating...");
  next(); //Control rights transfer to next Middleware
});

const courses = [
  { id: 1, name: "courses1" },
  { id: 2, name: "courses2" },
  { id: 3, name: "courses3" }
];
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/api/courses", (req, res) => {
  console.log("req.query", req.query);
  res.send(courses);
});
app.get("/api/courses/:id", (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) {
    res.status(404).send("The course is not found");
  } else {
    res.send(course);
  }
});
app.get("/api/posts/:year/:month", (req, res) => {
  res.send(req.query);
});

//POST
app.post("/api/courses", (req, res) => {
  //可以使用npm-joi来进行验证
  const result = validateCourse(req.body);
  // const { error } = validateCourse(req.body);
  //result.error
  if (result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }
  // if (!req.body.name || req.body.name.length < 3) {
  //   res.status(404).send("name is required and Name Should be minimum 3");
  //   return;
  // }
  const course = {
    id: courses.length + 1,
    name: req.body.name
  };
  courses.push(course);
  res.send(course);
});

//PUT
app.put("/api/courses/:id", (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) {
    res.status(404).send("The course is not found");
  } else {
    res.send(course);
  }
  const result = validateCourse(req.body);
  console.log(result.error.details[0].message); //result.error
  if (result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }
});

function validateCourse(course) {
  const schema = {
    name: Joi.string()
      .min(3)
      .required()
  };
  const result = Joi.validate(course, schema);
  return result;
}

//manage the PORT
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
