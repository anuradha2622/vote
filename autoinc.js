var mongodb=require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/users";
MongoClient.connect(url,function(err,db)
{
    if(err) throw(err)
    console.log("connection created")
    var db=db.db('users')
    db.createCollection('counters');
    db.collection('counters').insert(({_id:"tid",sequence_value:0}),function(err,res)
{
    if(err) throw(err)
    console.log("inserted");
})
    function getNextSequenceValue(sequenceName){
        var sequenceDocument = db.collection('counters').findAndModify({
        query:{_id: sequenceName },
        update: {$inc:{sequence_value:1}},
        new:true
          });
      return sequenceDocument.sequence_value;
      }
      db.collection('products').insert(({
        "_id":getNextSequenceValue("tid"),
        "product":"Samsung",
        "category":"mobiles"
          }),function(err,res)
        {
            if(err) throw(err)
            console.log("added")
        })
        db.collection('products').insert(({
            "_id":getNextSequenceValue("tid"),
            "product":"Samsung",
            "category":"mobiles"
              }),function(err,res)
            {
                if(err) throw(err)
                console.log("added")
            })
            db.collection('products').insert(({
                "_id":getNextSequenceValue("tid"),
                "product":"Samsung S3",
                "category":"mobiles"
                  }),function(err,res)
                {
                    if(err) throw(err)
                    console.log("added")
                })
               

})