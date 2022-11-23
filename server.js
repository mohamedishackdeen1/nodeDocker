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

app.listen(port, () => {
    console.log("server connected..")
});