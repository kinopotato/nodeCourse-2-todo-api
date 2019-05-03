const expect = require("expect");
const request = require("supertest");
const {ObjectID} = require("mongodb");

const {app} = require("./../server");
const {Todo} = require("./../models/todo");

const todos = [{
  _id: new ObjectID(),
  text: "01 text todo"
}, {
  _id: new ObjectID(),
  text: "02 text todo"
}];

beforeEach((done) => {
  Todo.deleteMany({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => done());
});

describe("POST /todos", () => {
  it("should create a new todo", (done) => {
    const text = "test todo text";

    request(app)
      .post("/todos")
      .send({text})
      .expect(200)
      .expect((res) => {
        expect(res.body.text).toBe(text);
      })
      .end((error, res) => {
        if (error) {
          return done(error);
        }

        Todo.find({text}).then((todos) => {
          expect(todos.length).toBe(3);
          expect(todos[0].text).toBe(text);
          done();
        }).catch((error) => {
          done(error);
        })
      })
  });

  it("should not create todo with invalid body data", (done) => {
    request(app)
      .post("/todos")
      .send({})
      .expect(400)
      .end((error, res) => {
        if (error) {
          return done(error);
        }

        Todo.find({}).then((todos) => {
          expect(todos.length).toBe(2);
          done();
        }).catch((error) => {
          done(error);
        })
      })
  });
  })

  describe("GET/todos", () => {
    it("should get all todos", (done) => {
      request(app)
        .get("/todos")
        .expect(200)
        .expect((res) => {
          expect(res.body.todos.length).toBe(2);
        }).end(done);
    })
  })

  describe("GET /todos/:id", () => {
    it("should return doc"), (done) => {
      request(app)
        .get(`/todos/${todos[0]._id.toHexString()}`)
        .expect(200)
        .expect((res) => {
          expect(res.body.todo.text).toBe(todos[0].text);
        }).end(done);
    };
    it("should return 404 if todo not found", (done) => {
      const hexId = new ObjectID().toHexString();

      request(app)
        .get(`/todos/${hexId}`)
        .expect(404)
        .end(done);
    });
    it("should return 404 for non-object ids", (done) => {
      request(app)
        .get("/todos/123abc")
        .expect(404)
        .end(done);
    });
  })