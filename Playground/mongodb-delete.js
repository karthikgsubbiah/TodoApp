const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to the mongoDB Server', err);
  }
  console.log('Connected to MongoDB Server');

  db.close();
})
