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

  // db.collection('Todos').find({completed: false}).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Users').find({name: 'Karthik', age: 21}).count().then((count) => {
    console.log(count);
  }, (err) => {
    console.log('Error occured');
  });

  db.collection('Users').find({name: 'Karthik', age: 21}).toArray().then((docs) => {
    console.log(docs);
  }, (err) => {
    console.log('Error occured');
  });

  db.close();
});
