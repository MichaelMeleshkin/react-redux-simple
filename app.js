var express = require('express');
var app = express();
var path    = require("path");
var bodyParser = require('body-parser');

app.use(express.static('build'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//MongoDB
var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');
// Connection URL
var url = 'mongodb://localhost:27017';

function connect(cb) {
    MongoClient.connect(url, function(err, client) {
        var db = client.db('reactapp');
        cb(db, client);
    })
}

var insertDocuments = function(db, data, callback) {
    // Get the documents collection
    var collection = db.collection('documents');
    // Insert some documents
    collection.insertOne({todo: data}, function(err, result) {
        callback(result);
    });
};

function insert(res, data) {
    connect(function (db, client) {
        console.log("Connected successfully to server");

        insertDocuments(db, data, function(result) {
            client.close();
            res.send(result);
        });
    });
}

app.post('/insert', function(req, res) {
    console.log(req.body.todo);
    insert(res, req.body.todo);
});

var findDocuments = function(db, callback) {
    // Get the documents collection
    var collection = db.collection('documents');
    // Find some documents
    collection.find({}).toArray(function(err, docs) {

        callback(docs);
    });
};

function find(res) {
    connect(function (db, client) {
        findDocuments(db, function(docs) {
            console.log(docs);
            client.close();
            res.send(docs);
        });
    });
}

app.post('/fetch', function(req, res) {
    find(res);
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});