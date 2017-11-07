
var express = require("express")
var router = express.Router();
var user = require("../models/user.js");
var history = require("../models/history")

router.get("/", function(req, res){
    res.render("index", {layout: 'main'})
    console.log("Working Login")
})


router.get("/login", function(req, res){
    console.log(req)
})

router.get('/signup', function(req, res){
    console.log(res);
})

router.get("/guest", function(req, res){
    res.render("search")
})

router.get("/guest/:name", function(req, res){
    console.log(req.params.name)
})

router.get("/eraone", function(req, res){
    history.ByDateOne(function(data){
        res.send(data);
    })
})

router.get("/eratwo", function(req, res){
    history.ByDateTwo(function(data){
        res.send(data);
    })
})

module.exports = router;