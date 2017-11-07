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
    }
}

module.exports = history;