const {mongoose} = require('./../Server/db/mongoose');
const {Todo} = require('./../Server/models/todo');
const {User} = require('./../Server/models/user');

const {ObjectId} = require('mongodb');

var id =

Todo.remove({}).then((result) => {
  console.log(result);
}, (err) => {
  console.log(err)
});

Todo.findByIdAndRemove(id).then((result) => {
  console.log(result);
}, (err) => {
  console.log(err);
});
