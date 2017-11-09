var express = require("express")
var router = express.Router();
var history = require("../models/history")

router.get("/eraone", function(req, res){
    history.ByDateOne(function(data){
        res.send(data);
    })
})

router.get("/eratwo", function(req, res){
    history.ByDateTwo(function(data){
        res.send(data);
    })
})
router.get("/erathree", function(req, res){
    history.ByDateThree(function(data){
        res.send(data);
    })
})
router.get("/erafour", function(req, res){
    history.ByDateFour(function(data){
        res.send(data);
    })
})
router.get("/erafive", function(req, res){
    history.ByDateFive(function(data){
        res.send(data);
    })
})
router.get("/erasix", function(req, res){
    history.ByDateSix(function(data){
        res.send(data);
    })
})
router.get("/eraseven", function(req, res){
    history.ByDateSeven(function(data){
        res.send(data);
    })
})
router.get("/eraeight", function(req, res){
    history.ByDateEight(function(data){
        res.send(data);
    })
})
router.get("/eranine", function(req, res){
    history.ByDateNine(function(data){
        res.send(data);
    })
})
router.get("/eraten", function(req, res){
    history.ByDateTen(function(data){
        res.send(data);
    })
})
router.get("/eraeleven", function(req, res){
    history.ByDateEleven(function(data){
        res.send(data);
    })
})

router.get("/eratwelve", function(req, res){
    history.ByDateTwelve(function(data){
        res.send(data);
    })
})

router.get("/erathirdteen", function(req, res){
    history.ByDateThirdteen(function(data){
        res.send(data);
    })
})

router.get("/erafourteen", function(req, res){
    history.ByDateFourteen(function(data){
        res.send(data);
    })
})

router.get("/erafiveteen", function(req, res){
    history.ByDateFiveteen(function(data){
        res.send(data);
    })
})

router.get("/erasixteen", function(req, res){
    history.ByDateSixteen(function(data){
        res.send(data);
    })
})

router.get("/eraseventeen", function(req, res){
    history.ByDateSeventeen(function(data){
        res.send(data);
    })
})

router.get("/eraeightteen", function(req, res){
    history.ByDateEightteen(function(data){
        res.send(data);
    })
})

router.get("/eranineteen", function(req, res){
    history.ByDateNineteen(function(data){
        res.send(data);
    })
})

router.get("/eratwenty", function(req, res){
    history.ByDateTwenty(function(data){
        res.send(data);
    })
})

router.get("/eratwentyone", function(req, res){
    history.ByDateTwentyOne(function(data){
        res.send(data);
    })
})

router.get("/eratwentytwo", function(req, res){
    history.ByDateTwentyTwo(function(data){
        res.send(data);
    })
})

router.get("/eratwentythree", function(req, res){
    history.ByDateTwentyThree(function(data){
        res.send(data);
    })
})

router.get("/eratwentyfour", function(req, res){
    history.ByDateTwentyFour(function(data){
        res.send(data);
    })
})

router.get("/eratwentyfive", function(req, res){
    history.ByDateTwentyFive(function(data){
        res.send(data);
    })
})

router.get("/eratwentysix", function(req, res){
    history.ByDateTwentySix(function(data){
        res.send(data);
    })
})

router.get("/eratwentyseven", function(req, res){
    history.ByDateTwentySeven(function(data){
        res.send(data);
    })
})
router.get("/eratwentyeight", function(req, res){
    history.ByDateTwentyEight(function(data){
        res.send(data);
    })
})
router.get("/eratwentynine", function(req, res){
    history.ByDateTwentyNine(function(data){
        res.send(data);
    })
})
router.get("/erathirty", function(req, res){
    history.ByDateThirty(function(data){
        res.send(data);
    })
})

module.exports = router;