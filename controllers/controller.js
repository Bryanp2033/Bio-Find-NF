
var express = require("express")
var router = express.Router();
var user = require("../models/user.js");
var history = require("../models/history")


router.get("/", function(req, res){
    res.render("index", {layout: 'main'})
    console.log("Working Login")
})

// TODO: get this route working/ future update
router.get("/login", function(req, res){
    console.log(req)
})

// TODO: get this route working/ future update
router.get('/signup', function(req, res){
    console.log(res);
})

// guest login
router.get("/guest", function(req, res){
    res.render("search")
})

// redirect to guest/:full_name
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
    
})

// search route
router.post("/search", function(req, res){
    console.log(req.body.name);
    var name = req.body.name

    res.redirect("/guest/" + name);
})

// Export the controller for the model.
module.exports = router;