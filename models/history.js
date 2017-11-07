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
    ByDateSix: function(cb){
        orm.ByDateSix(function(res){
            cb(res);
        });
    },
    ByDateSeven: function(cb){
        orm.ByDateSeven(function(res){
            cb(res);
        });
    },
    ByDateEight: function(cb){
        orm.ByDateEight(function(res){
            cb(res);
        });
    },
    ByDateNine: function(cb){
        orm.ByDateNine(function(res){
            cb(res);
        });
    },
    ByDateTen: function(cb){
        orm.ByDateTen(function(res){
            cb(res);
        });
    },
}

module.exports = history;