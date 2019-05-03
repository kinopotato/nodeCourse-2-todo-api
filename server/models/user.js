const mongoose = require("mongoose");

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

//export user module

module.exports = {User};