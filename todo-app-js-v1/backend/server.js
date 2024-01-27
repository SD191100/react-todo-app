const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const todoSchema = new mongoose.Schema({
  title: String,
  description: String
})

const Todos = mongoose.model('Todos', todoSchema);

mongoose.connect(
  'mongodb+srv://shivamdurgude:01010202@cluster0.hny5grp.mongodb.net/todos', 
  { useNewUrlParser: true, useUnifiedTopology: true, dbName: "todos" }
);

app.get('/todos', async(req, res) => {
  const todos = await Todos.find({});

  res.json(todos);
});

app.get('/todos/:id', async (req, res) => {
  const id = req.params.id;

  const todo = await Todos.findOne({id: id});
  console.log(todo + " type: " + typeof todo);

  if (todo) {
    res.json(todo);
  } else {
    res.status(404).send();
  }
});

app.post('/todos', async (req, res) => {
  const { title, description } = req.body;

  const newTodo =  new Todos({title: title, description: description});
  await newTodo.save();

  res.status(201).json(newTodo);
});

app.put('/todos/:id', async(req, res) => {
  const id = req.params.id;
  const { title, description } = req.body;

  const newTodo = {
    title: title,
    description: description
  }
  const todo = await Todos.findByIdAndUpdate(id, newTodo, {new: true});

  if (todo) {
    res.status(200).send('sucess');
  } else {
    res.status(404).send('cannot update');
  }
});

app.delete('/todos/:id', async (req, res) => {
  const id = req.params.id;
  const todo = await Todos.findByIdAndDelete(id)
  
  if (todo) {
    res.status(200).send('Deleted Sucessfully');
  } else {
    res.status(404).send('cannot delete');
  }
});

app.use((req, res, next) => {
  res.status(404).send();
});

app.listen(3000, () => {
  console.log('server listening at [port: 3000]\n');
});