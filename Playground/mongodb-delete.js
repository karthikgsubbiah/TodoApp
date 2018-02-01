const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to the mongoDB Server', err);
  }
  console.log('Connected to MongoDB Server');

  //Deletes all the documemnts which satisfies the particular condition
  db.collection('Users').deleteMany({name : 'Karthik'}).then((result) => {
    console.log(result);
  }, (err) => {
      console.log('Document not deleted', err);
  });

//Deletes one of the documemnts which satisfies the particular condition
  db.collection('Users').deleteOne({age: 19}).then((result) => {
    console.log(result);
  }, (err) => {
    console.log('Document not deleted', err);
  });

  //Deletes one of the documemnts which satisfies the particular condition and returns the deleted document for display
  db.collection('Todos').findOneAndDelete({text: 'Something to do'}).then((result) => {
    console.log(result);
  }, (err) => {
    console.log('Document not deleted', err);
  });

  db.close();
})
