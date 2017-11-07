var orm = require("../config/orm.js");

var history = {
    ByDate: function(cb){
        orm.ByDate(function(res){
            cb(res);
        });
    }
}

module.exports = history;