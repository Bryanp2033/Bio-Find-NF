var express = require("express")
var router = express.Router();
var history = require("../models/history")


// BETWEEN 1700 AND 1800
router.get("/alphabetical-one", function(req, res){
    history.ByAlphabetical(1700, 1800, function(data){
        res.send(data);
    })
})

// BETWEEN 1600 AND 1700
router.get("/alphabetical-two", function(req, res){
    history.ByAlphabetical(1600, 1700, function(data){
        res.send(data);
    })
})
// BETWEEN 1500 AND 1600
router.get("/alphabetical-three", function(req, res){
    history.ByAlphabetical(1500, 1600, function(data){
        res.send(data);
    })
})
// BETWEEN 1400 AND 1500
router.get("/alphabetical-four", function(req, res){
    history.ByAlphabetical(1400, 1500, function(data){
        res.send(data);
    })
})
// BETWEEN 1300 AND 1400
router.get("/alphabetical-five", function(req, res){
    history.ByAlphabetical(1300, 1400, function(data){
        res.send(data);
    })
})
// BETWEEN 1200 AND 1300
router.get("/alphabetical-six", function(req, res){
    history.ByAlphabetical(1200, 1300, function(data){
        res.send(data);
    })
})
// BETWEEN 1100 AND 1200
router.get("/alphabetical-seven", function(req, res){
    history.ByAlphabetical(1100, 1200, function(data){
        res.send(data);
    })
})
// BETWEEN 1000 AND 1100
router.get("/alphabetical-eight", function(req, res){
    history.ByAlphabetical(1000, 1100, function(data){
        res.send(data);
    })
})
// BETWEEN 900 AND 1000
router.get("/alphabetical-nine", function(req, res){
    history.ByAlphabetical(900, 1000, function(data){
        res.send(data);
    })
})
// BETWEEN 800 AND 900
router.get("/alphabetical-ten", function(req, res){
    history.ByAlphabetical(800, 900, function(data){
        res.send(data);
    })
})
// BETWEEN 700 AND 800
router.get("/alphabetical-eleven", function(req, res){
    history.ByAlphabetical(700, 800, function(data){
        res.send(data);
    })
})
// BETWEEN 600 AND 700
router.get("/alphabetical-twelve", function(req, res){
    history.ByAlphabetical(600, 700, function(data){
        res.send(data);
    })
})
// BETWEEN 500 AND 600
router.get("/alphabetical-thirdteen", function(req, res){
    history.ByAlphabetical(500, 600, function(data){
        res.send(data);
    })
})
// BETWEEN 400 AND 500
router.get("/alphabetical-fourteen", function(req, res){
    history.ByAlphabetical(400, 500, function(data){
        res.send(data);
    })
})
// BETWEEN 300 AND 400
router.get("/alphabetical-fiveteen", function(req, res){
    history.ByAlphabetical(300, 400, function(data){
        res.send(data);
    })
})
// BETWEEN 200 AND 300
router.get("/alphabetical-sixteen", function(req, res){
    history.ByAlphabetical(200, 300, function(data){
        res.send(data);
    })
})
// BETWEEN 100 AND 200
router.get("/alphabetical-seventeen", function(req, res){
    history.ByAlphabetical(100, 200, function(data){
        res.send(data);
    })
})
// BETWEEN 0 AND 100
router.get("/alphabetical-eighteen", function(req, res){
    history.ByAlphabetical(0, 100, function(data){
        res.send(data);
    })
})
// BETWEEN -100 AND 0
router.get("/alphabetical-nineteen", function(req, res){
    history.ByAlphabetical( -100, 0, function(data){
        res.send(data);
    })
})
// BETWEEN -200 AND -100
router.get("/alphabetical-twenty", function(req, res){
    history.ByAlphabetical( -200, -100, function(data){
        res.send(data);
    })
})
// BETWEEN -300 AND -200
router.get("/alphabetical-twentyone", function(req, res){
    history.ByAlphabetical( -300, -200, function(data){
        res.send(data);
    })
})
// BETWEEN -400 AND -300
router.get("/alphabetical-twentytwo", function(req, res){
    history.ByAlphabetical( -400, -300, function(data){
        res.send(data);
    })
})
// BETWEEN -500 AND -400
router.get("/alphabetical-twentythree", function(req, res){
    history.ByAlphabetical( -500, -400, function(data){
        res.send(data);
    })
})
// BETWEEN -600 AND -500
router.get("/alphabetical-twentyfour", function(req, res){
    history.ByAlphabetical( -600, -500, function(data){
        res.send(data);
    })
})
// BETWEEN -700 AND -600
router.get("/alphabetical-twentyfive", function(req, res){
    history.ByAlphabetical( -700, -600, function(data){
        res.send(data);
    })
})
// BETWEEN -800 AND -700
router.get("/alphabetical-twentysix", function(req, res){
    history.ByAlphabetical( -800, -700, function(data){
        res.send(data);
    })
})
// BETWEEN -900 AND -800
router.get("/alphabetical-twentyseven", function(req, res){
    history.ByAlphabetical( -900, -800, function(data){
        res.send(data);
    })
})
// BETWEEN -1000 AND -900
router.get("/alphabetical-twentyeight", function(req, res){
    history.ByAlphabetical( -1000, -900, function(data){
        res.send(data);
    })
})
// BETWEEN -1100 AND -1000
// fix the the last three order of dates
router.get("/alphabetical-twentynine", function(req, res){
    history.ByAlphabetical( -1100, -1000, function(data){
        res.send(data);
    })
})
// BETWEEN -1200 AND -1100
router.get("/alphabetical-thirty", function(req, res){
    history.ByAlphabetical( -1200, -1100, function(data){
        res.send(data);
    })
})

router.get("/default-one", function(req, res){
    history.ByDateOne(function(data){
        res.send(data);
    })
})


module.exports = router;