
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

router.get("/guest/:full_name", function(req, res){
    console.log(req.params.full_name)
    var name = req.params.full_name

    history.ByName(name, function(data){
        console.log(data);

        var hbsObject = {
            names: data
        }

        res.render("person", hbsObject)
    })
    // TODO make an orm to search for all the info of the name of the person and make it into a handlebars Object.
})

router.post("/search", function(req, res){
    console.log(req.body.name);
    var name = req.body.name

    res.redirect("/guest/" + name);
})


module.exports = router;