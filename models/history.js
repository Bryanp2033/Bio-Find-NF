var orm = require("../config/orm.js");

var history = {
    ByDateOne: function(cb){
        orm.ByDateOne(function(res){
            cb(res);
        });
    },
    ByDateTwo: function(cb){
        orm.ByDateTwo(function(res){
            cb(res);
        });
    },
    ByDateThree: function(cb){
        orm.ByDateThree(function(res){
            cb(res);
        });
    },
    ByDateFour: function(cb){
        orm.ByDateFour(function(res){
            cb(res);
        });
    },
    ByDateFive: function(cb){
        orm.ByDateFive(function(res){
            cb(res);
        });
    },
}

module.exports = history;