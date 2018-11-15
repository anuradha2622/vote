const MongoClient = require('mongodb').MongoClient;
//Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://localhost:27017/voters';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.createCollection("counters");
db.collection('counters').insert({_id:"productid",sequence_value:0})
function getNextSequenceValue(sequenceName){

    var sequenceDocument = db.collection('counters').findAndModify({
       query:{_id: sequenceName },
       update: {$inc:{sequence_value:1}},
       new:true
    });
     
    return sequenceDocument.sequence_value;
 }
 db.collection('products').insert({
    "_id":getNextSequenceValue("productid"),
    "product_name":"Apple iPhone",
    "category":"mobiles"
 })
 
 db.collection('products').insert({
    "_id":getNextSequenceValue("productid"),
    "product_name":"Samsung S3",
    "category":"mobiles"
 })