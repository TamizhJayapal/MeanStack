var express = require('express');
var router = express.Router();
var mongoClient = require('mongodb').MongoClient
var objectID = require('mongodb').objectID;

const connection = (closure) => {
    return mongoClient.connect('mongodb://localhost:27017/fullstak',(err,db) =>{
        if(err){
            return console.log(err);
        }
        closure(db)
    })
}

let response = {
    status:200,
    message:null,
    data:[]
}

//var sendError = (err,res) =>{
   // response.status= 501,
 //   response.message = typeof err == "object" ? err.message :err;
  //  res.status(501).json(response);
//}

router.get('/students',(req,res)=>{
    connection((db) => {
        db.collection('students').find().toArray().then((students) => {
            response.data = students;
            res.json(response);
        })
    })
})

module.exports = router;