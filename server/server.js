

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/Todoapp", { useNewUrlParser: true });

//creating a model with mongoose

const Todo = mongoose.model("Todo", {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
})

//exercise, create a new Todo

// const newTodo2 = new Todo({
//   text: "         something new to do"
// })

// newTodo2.save().then((doc) => {
//   console.log("Todo saved", doc)
// }, (error) => {
//   console.log("error occured", error)
// })

//exercise 2

//create user model
//email property, required, trim, type: String, minlength: 1
const User = mongoose.model("User", {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
})

//create a user and save in db

const newUser = new User({
  email: "something@gmail.com"
});

newUser.save().then((doc) => {
  console.log("user saved", doc);
}, (error) => {
  console.log("user not saved", error);
})