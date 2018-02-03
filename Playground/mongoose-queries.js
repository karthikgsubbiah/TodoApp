const {mongoose} = require('./../Server/db/mongoose');
const {Todo} = require('./../Server/models/todo');
const {User} = require('./../Server/models/user');

const {ObjectId} = require('mongodb');

var id = '5a7445e70303fec035dff017';

if(!ObjectId.isValid(id)){
  console.log('ID is not valid');
}

Todo.find({
  _id: id
}).then((todos) => {
  console.log(todos);
}, (err) => {
  console.log(err);
});

User.findById('5a7421f00a08a3a429cc8582').then((user) => {
  if(!user){
    return console.log('Unable to find the user');
  }
  console.log(user);
}).catch((e) => {console.log(e)});

Todo.findOne({}).then((todo) => {
  console.log(todo);
}, (err) => {
  console.log(err);
});


Todo.findById(id).then((todo) => {
  console.log(todo);
}, (err) => {
  console.log(err);
});
