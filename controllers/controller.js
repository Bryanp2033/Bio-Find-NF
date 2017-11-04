
var express = require("express")
var router = express.Router();
var user = require("../models/user.js");

router.get("/", function(request, response){
    response.render("index", {layout: 'main'})
    console.log("Working Login")
})

module.exports = router;