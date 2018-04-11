var express = require('express'),
    router = express.Router(),
    mongoClient = require('mongodb').MongoClient,
    ObjectId = require('mongodb').ObjectID;

router.post('/validateUser', function (req, res) {
    var creds = req.body;
    mongoClient.connect("mongodb://localhost:27017/blogData", function (e, db) {
        if (e) {
            res.send("no connection to db");
        }
        var collection = db.collection('users');
        collection.findOne({ username: creds.username }, function (e, value) {
            if (value && (creds.password == value.password)) {
                res.json(true);
            } else {
                res.json(false);
            }
            db.close();
        });
    });
})

router.get('/blogPosts', function (req, res) {
    mongoClient.connect("mongodb://localhost:27017/blogData", function (e, db) {
        if (e) {
            res.send("no connection to DB");
        }
        var collection = db.collection('blogPosts');
        if (req.query.lastIndex && !req.query.single) {
            console.log('there we go');
            collection.find({ '_id': { $lt: ObjectId(req.query.lastIndex) } }).sort({ _id: -1 }).limit(5).toArray(function (error, result) {
                res.json(result);
            });
        }  else if (req.query.single) {
            console.log("single");
            collection.findOne({ _id: ObjectId(req.query.single) }, function (e, result) {
                res.json([result]);
            });
        } else {
            console.log("5 thigns")
            collection.find().sort({ _id: -1 }).limit(5).toArray(function (error, result) {
                res.json(result);
            });
        }

        db.close();
    });
})

router.post('/addPost', function (req, res) {
    var body = req.body;
    mongoClient.connect('mongodb://localhost:27017/blogData', function (e, db) {
        if (e) {
            res.send('no connection to DB');
        }
        var collection = db.collection('blogPosts');
        collection.insert({ title: body.title, content: body.content }, function (e, response) {
            res.send("Sent");
        });
        db.close();
    });
})

router.put('/updatePost', function (req, res) {
    var body = req.body;
    mongoClient.connect('mongodb://localhost:27017/blogData', function (e, db) {
        if (e) {
            res.send('no connection to DB');
        }
        var collection = db.collection('blogPosts');
        collection.update({ _id: ObjectId(body._id) }, { title: body.title, content: body.content }, function (e, response) {
            res.send("Sent");
        });
        db.close();
    });
})

router.delete('/deletePost', function (req, res) {
    mongoClient.connect('mongodb://localhost:27017/blogData', function (e, db) {
        if (e) {
            res.send('no connection to DB');
        }
        var collection = db.collection('blogPosts');
        collection.remove({ _id: ObjectId(req.query._id) }, function (e, response) {
            res.send("Done");
        });
        db.close();
    });
})

router.post('/addImage', function (req, res) {
    var body = req.body;
    mongoClient.connect('mongodb://localhost:27017/blogData', function (e, db) {
        if (e) {
            res.send('no connection to DB');
        }
        var collection = db.collection('images');
        collection.insert({ title: body.title, content: body.content }, function (e, response) {
            res.send("Sent");
        });
        db.close();
    });
})

router.get('/getImage', function (req, res) {
    mongoClient.connect("mongodb://localhost:27017/blogData", function (e, db) {
        if (e) {
            res.send("no connection to DB");
        }
        var collection = db.collection('images');
        if (req.query.lastIndex && !req.query.single) {
            collection.find({ '_id': { $lt: ObjectId(req.query.lastIndex) } }).sort({ _id: -1 }).limit(5).toArray(function (error, result) {
                res.json(result);
            });
        }  else if (req.query.single) {
            console.log("single");
            collection.findOne({ _id: ObjectId(req.query.single) }, function (e, result) {
                res.json([result]);
            });
        } else {
            console.log("5 thigns")
            collection.find().sort({ _id: -1 }).limit(5).toArray(function (error, result) {
                res.json(result);
            });
        }

        db.close();
    });
})
module.exports = router;