const mongoose = require("mongoose");


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

//export todo model

module.exports = {Todo};