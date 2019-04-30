// const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log("unable to connect to MongoDB server");
  }
  console.log("connected to MongoDB server");
  const db = client.db("TodoApp");

  // db.collection("Todos").insertOne({
  //   text: "something to do",
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log("unable to insert Todo", err);
  //   }

  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // })

  // client.close();

  //insert new doc into Users (name, age, location)

  // db.collection("Users").insertOne({
  //   name: "kino",
  //   age: 28,
  //   location: "ph"
  // }, (err, result) => {
  //   if (err) {
  //     return console.log("unable to insert User", err);
  //   }

  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
  // })

  client.close();
})