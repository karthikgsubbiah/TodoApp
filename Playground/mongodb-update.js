const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to the MongoDB Server');
  }

  console.log('Successfully connected to the MongoDB Server');

  db.collection('Users').findOneAndUpdate(
    {
      _id: new ObjectID('5a7343621a6ac52c7c5c1ab8')
    },{
    $set: {
      name: 'Sai'
    },
    $inc: {
      age: -2
    }},
    {
      returnOriginal: false
    }).then((result) => {
    console.log(result);
});
db.close();
});
