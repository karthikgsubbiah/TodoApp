const express = require('express');

//Object Destructuring in action, an ES6 feature
//Can pull off properties of the objects and assign it to a new variable
//The below statement is equivalent to:
//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

//Creating our own objectID
//Can create our own ObjectID
//Or else leave the work to MongoDB
//ObjectID -> 4 bytes of TimeStamp + 3 bytes of MachineID + 2 bytes of ProcessID + 3 bytes of Counter
var obj = new ObjectID();
console.log(obj);

const bodyParser = require('body-parser');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to the mongodb server');
  }
  console.log('Connected to MongoDB Server');

  db.collection('Todos').insertOne({
    text: 'Something to do',
    completed: false
  }, (err, result) => {
    	if(err){
        return console.log('Unable to insert Todo', err);
      }

      console.log(JSON.stringify(result.ops, undefined, 2));
  });

  db.collection('Users').insertOne({
    name: 'Karthik',
    age: 21,
    location: 'Bangalore'
  }, (err, result) => {
    if(err){
      return console.log('Unable to insert Users', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
    console.log(result.ops[0]._id.getTimestamp());
  });

  db.close();
});
