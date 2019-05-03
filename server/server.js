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
   res.send(success);
  }, (error) => {
    res.status(400).send(error);
  })
})

app.get("/todos", (req, res) => {
  Todo.find().then((todos) => {
    res.send("todos");
  }, (error) => {
    res.status(400).send(error)
  })
})




app.listen(3000, () => {
  console.log("started on port 3000")
})


//export server for testing
module.exports ={app};