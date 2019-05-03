

//library imports
//local imports
const {ObjectID} = require("mongodb");
const {mongoose} = require("./../server/db/mongoose");

//models
const {Todo} = require("./../server/models/todo");
const {User} = require("./../server/models/user");

const id = "5ccc0f2ca7a9be1120d97de8";

const id2 = "5ccbce19a100050ca8f04aa3";

// //validate ID
// if (!ObjectID.isValid(id)){
//   console.log("ID is NOT valid");
// }

// // Todo.find({
// //   _id: id
// // }).then((todos) => {
// //   console.log("todos", todos);
// // });

// // Todo.findOne({
// //   _id: id
// // }).then((todo) => {
// //   console.log("todo", todo);
// // });


// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log("id not found");
//   }
//   console.log("todo by id", todo)
// }).catch((error) => console.log(error));

//exercise 
//query the users collection

//User.findByID
User.findById(id2).then((user) => {
  if (!user){
    return console.log("user NOT found");
  }
  console.log("user found", user)
}).catch((error) => console.log(error));
