var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var port = 3001;
app.get('/', (req, res) => {
    res.send("backend API Running...");
})
const path = require("path");
const static_path = path.join(__dirname, "public");
app.use(express.static(static_path));
app.use(express.urlencoded({ extended: true }));
app.get('/home', (req, res) => {
    console.log(req.body);
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbname = db.db("formdb");
        dbname.collection("formcollection").insertOne(({Appname:req.body}), function (err, result) {
            if (err) throw err;
            console.log("one data inserted....");
            db.close();
        });
    });
    res.send(req.body);
})

// Handling request 
app.post("/request", (req, res) => {
  console.log(req.body)
  res.json([{
     name_recieved: req.body.name,
     designation_recieved: req.body.designation
  }])
})
app.listen(port, () => {
    console.log("server connected..")
});