//library imports
const express = require("express");
const bodyParser = require("body-parser");


//local imports

const {mongoose} = require("./db/mongoose");

//models
const {Todo} = require("./models/todo");
const {User} = require("./models/user");


const app = express();

app.use(bodyParser.json());

app.post("/todos", (req, res) => {
  const todo = new Todo({
    text: req.body.text
  });

  todo.save().then((success) => {
    console.log("todo saved", success);
  }, (error) => {
    console.log("error", error);
  })
})




app.listen(3000, () => {
  console.log("started on port 3000")
})


