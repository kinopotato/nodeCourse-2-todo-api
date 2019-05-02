// const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log("unable to connect to MongoDB server");
  }
  console.log("connected to MongoDB server");
  const db = client.db("TodoApp");
  
  //findOneAndUpdate
  db.collection("Users").findOneAndUpdate({
    _id : new ObjectID("5cbdaf7d698c2e076c160b05")
  }, {
    $set: {
      name: "kino"
    }, 
    $inc: {
      age: 1 
      }
  }, {
    returnOriginal: false
  }).then((result) => console.log(result));


  //client.close();
})