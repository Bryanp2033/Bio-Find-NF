
var express = require("express")
var router = express.Router();
var user = require("../models/user.js");

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
    console.log("hello")
})


module.exports = router;