// const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log("unable to connect to MongoDB server");
  }
  console.log("connected to MongoDB server");
  const db = client.db("TodoApp");
  
  // db.collection("Todos").find({
  //   _id: new ObjectID("5cbef49f4849165fcb5e093f")
  // }).toArray().then((docs) => {
  //   console.log("Todos");
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log("unable to fetch Todos", err)
  // })

  // db.collection("Users").find({name: "kino"}).toArray().then((docs) => {
  //   console.log(`Users`);
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log("unable to fetch Todos", err)
  // })

  //deleteMany
  // db.collection("Todos").deleteMany({text: "eat lunch"}).then((result) => {
  //   console.log(result);
  // })

  //deleteOne
  // db.collection("Todos").deleteOne({text: "eat lunch"}).then((result) => console.log(result));

  //findOneAndDelete
  // db.collection("Todos").findOneAndDelete({completed: false}).then((result) => console.log(result));


  //deleteMany, remove all documents with the same name
  // db.collection("Users").deleteMany({name: "kino"}).then((result) => console.log(result));

  //findOneAndDelete to delete any element by ID
  db.collection("Users").findOneAndDelete({"_id": new ObjectID('5cbec99e41db1a13545af3cf')}).then((result) => console.log(result));



  //client.close();
})