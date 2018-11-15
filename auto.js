
var MongoClient = require('mongodb').MongoClient;
db.counters.insert(
    {
        "_id":"userid",
        "seq":0
    }
)
function getNextSequence(name) {
    var ret = db.counters.findAndModify(
           {
             query: { _id: name },
             update: { $inc: { seq: 1 } },
             new: true
           }
    );
 
    return ret.seq;
 }
 db.users.insert(
    {
      _id: getNextSequence("userid"),
      name: "Sarah C."
    }
 )
 
 db.users.insert(
    {
      _id: getNextSequence("userid"),
      name: "Bob D."
    }
 )