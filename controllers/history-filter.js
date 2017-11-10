var express = require("express")
var router = express.Router();
var history = require("../models/history")

router.get("/alphabetical-one", function(req, res){
    history.ByAlphabetical(1700, 1800, function(data){
        res.send(data);
    })
})

router.get("/default-one", function(req, res){
    history.ByDateOne(function(data){
        res.send(data);
    })
})
module.exports = router;