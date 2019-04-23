var express = require('express');
var router = express.Router();
var mongo = require("mongodb-curd");

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

var db = "lemon";
var User = "User";

/* 登录 */
router.get('/api/login', function(req, res, next) {
    var user = req.body.user;
    var pasd = req.body.pasd;
    mongo.find(db, User, { "user": user, "pasd": pasd }, function(result) {
        if (!result) {
            res.send({
                code: 0,
                msg: "error"
            })
        } else {
            res.send({
                code: 1,
                msg: "success",
                data: result
            })
        }
    })
});


module.exports = router;