const {mongoose} = require('./../Server/db/mongoose');
const {Todo} = require('./../Server/models/todo');
const {User} = require('./../Server/models/user');

const {ObjectId} = require('mongodb');

var id =

Todo.remove({}).then((result) => {
  console.log(result);
});

Todo.findByIdAndRemove(id).then()
