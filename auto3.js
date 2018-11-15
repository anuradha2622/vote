const MongoClient = require('mongodb').MongoClient;
//Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://localhost:27017/voters';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.collection('counters').insert(
    {
       _id: "userid",
       seq: 0
    }
 )
 function getNextSequence(name) {
    var ret = db.collection('counters').findAndModify(
           {
             query: { _id: name },
             update: { $inc: { seq: 1 } },
             new: true
           },
           v=ret.seq,
    );
 
    return v;
 }
 db.collection('users').insert(
    {
      _id: getNextSequence("userid"),
      name: "Sarah C."
    }
 )
 
 db.collection('users').insert(
    {
      _id: getNextSequence("userid"),
      name: "Bob D."
    }
 )