

//library imports
//local imports
const {ObjectID} = require("mongodb");
const {mongoose} = require("../server/db/mongoose");

//models
const {Todo} = require("../server/models/todo");
const {User} = require("../server/models/user");

// Todo.deleteMany({}).then((result) => {
//   console.log(result);
// })

//Todo.findOneAndRemove({})
//Todo.fineByIdAndRemove({})

Todo.findOneAndRemove({_id: "5ccc689f83cb34db943480ac"}).then((todo) => {
  
})

Todo.findByIdAndRemove("5ccc689f83cb34db943480ac").then((todo) => {
  console.log(todo);
})