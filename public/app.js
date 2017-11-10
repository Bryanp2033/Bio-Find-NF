$(document).one("click", "#button-one", function(event){
    event.preventDefault();
    
    $.ajax({
        method: "GET",
        url: "/eraone",
    }).done(function(data) {
        for(var i = 0; i < data.length; i++){
            console.log(data[i].full_name)
            var div = $("<div id='history-template'>");
            var p = $("<p class='history-name'>")
            var a = $("<a>")
            //a.attr("href", "/guest/" + data[i].article_id);
            a.attr("href", "/guest/" + data[i].full_name);
            a.html(data[i].full_name);
            $(p).append(a);
            $(div).append(p);
            $("#time-era-one").append(div);
        }
    });
})

$(document).one("click", "#button-two", function(event){
    event.preventDefault();
    
    $.ajax({
        method: "GET",
        url: "/eratwo",
    }).done(function(data) {
        for(var i = 0; i < data.length; i++){
            console.log(data[i].full_name)
            var div = $("<div id='history-template'>");
            var p = $("<p class='history-name'>")
            var a = $("<a>")
            a.attr("href", "/guest/" + data[i].full_name);
            a.html(data[i].full_name);
            $(p).append(a);
            $(div).append(p);
            $("#time-era-two").append(div);
        }
    });
})

$(document).one("click", "#button-three", function(event){
    event.preventDefault();
    
    $.ajax({
        method: "GET",
        url: "/erathree",
    }).done(function(data) {
        for(var i = 0; i < data.length; i++){
            console.log(data[i].full_name)
            var div = $("<div id='history-template'>");
            var p = $("<p class='history-name'>")
            var a = $("<a>")
            a.attr("href", "/guest/" + data[i].full_name);
            a.html(data[i].full_name);
            $(p).append(a);
            $(div).append(p);
            $("#time-era-three").append(div);
        }
    });
})

$(document).one("click", "#button-four", function(event){
    event.preventDefault();
    
    $.ajax({
        method: "GET",
        url: "/erafour",
    }).done(function(data) {
        for(var i = 0; i < data.length; i++){
            console.log(data[i].full_name)
            var div = $("<div id='history-template'>");
            var p = $("<p class='history-name'>")
            var a = $("<a>")
            a.attr("href", "/guest/" + data[i].full_name);
            a.html(data[i].full_name);
            $(p).append(a);
            $(div).append(p);
            $("#time-era-four").append(div);
        }
    });
})

$(document).one("click", "#button-five", function(event){
    event.preventDefault();
    
    $.ajax({
        method: "GET",
        url: "/erafive",
    }).done(function(data) {
        for(var i = 0; i < data.length; i++){
            console.log(data[i].full_name)
            var div = $("<div id='history-template'>");
            var p = $("<p class='history-name'>")
            var a = $("<a>")
            a.attr("href", "/guest/" + data[i].full_name);
            a.html(data[i].full_name);
            $(p).append(a);
            $(div).append(p);
            $("#time-era-five").append(div);
        }
    });
})

$(document).one("click", "#button-six", function(event){
    event.preventDefault();
    
    $.ajax({
        method: "GET",
        url: "/erasix",
    }).done(function(data) {
        for(var i = 0; i < data.length; i++){
            console.log(data[i].full_name)
            var div = $("<div id='history-template'>");
            var p = $("<p class='history-name'>")
            var a = $("<a>")
            a.attr("href", "/guest/" + data[i].full_name);
            a.html(data[i].full_name);
            $(p).append(a);
            $(div).append(p);
            $("#time-era-six").append(div);
        }
    });
})

$(document).one("click", "#button-seven", function(event){
    event.preventDefault();
    
    $.ajax({
        method: "GET",
        url: "/eraseven",
    }).done(function(data) {
        for(var i = 0; i < data.length; i++){
            console.log(data[i].full_name)
            var div = $("<div id='history-template'>");
            var p = $("<p class='history-name'>")
            var a = $("<a>")
            a.attr("href", "/guest/" + data[i].full_name);
            a.html(data[i].full_name);
            $(p).append(a);
            $(div).append(p);
            $("#time-era-seven").append(div);
        }
    });
})

$(document).one("click", "#button-eight", function(event){
    event.preventDefault();
    
    $.ajax({
        method: "GET",
        url: "/eraeight",
    }).done(function(data) {
        for(var i = 0; i < data.length; i++){
            console.log(data[i].full_name)
            var div = $("<div id='history-template'>");
            var p = $("<p class='history-name'>")
            var a = $("<a>")
            a.attr("href", "/guest/" + data[i].full_name);
            a.html(data[i].full_name);
            $(p).append(a);
            $(div).append(p);
            $("#time-era-eight").append(div);
        }
    });
})

$(document).one("click", "#button-nine", function(event){
    event.preventDefault();
    
    $.ajax({
        method: "GET",
        url: "/eranine",
    }).done(function(data) {
        for(var i = 0; i < data.length; i++){
            console.log(data[i].full_name)
            var div = $("<div id='history-template'>");
            var p = $("<p class='history-name'>")
            var a = $("<a>")
            a.attr("href", "/guest/" + data[i].full_name);
            a.html(data[i].full_name);
            $(p).append(a);
            $(div).append(p);
            $("#time-era-nine").append(div);
        }
    });
})

$(document).one("click", "#button-ten", function(event){
    event.preventDefault();
    
    $.ajax({
        method: "GET",
        url: "/eraten",
    }).done(function(data) {
        for(var i = 0; i < data.length; i++){
            console.log(data[i].full_name)
            var div = $("<div id='history-template'>");
            var p = $("<p class='history-name'>")
            var a = $("<a>")
            a.attr("href", "/guest/" + data[i].full_name);
            a.html(data[i].full_name);
            $(p).append(a);
            $(div).append(p);
            $("#time-era-ten").append(div);
        }
    });
})

$(document).one("click", "#button-eleven", function(event){
    event.preventDefault();
    
    $.ajax({
        method: "GET",
        url: "/eraeleven",
    }).done(function(data) {
        for(var i = 0; i < data.length; i++){
            console.log(data[i].full_name)
            var div = $("<div id='history-template'>");
            var p = $("<p class='history-name'>")
            var a = $("<a>")
            a.attr("href", "/guest/" + data[i].full_name);
            a.html(data[i].full_name);
            $(p).append(a);
            $(div).append(p);
            $("#time-era-eleven").append(div);
        }
    });
})

$(document).one("click", "#button-twelve", function(event){
    event.preventDefault();
    
    $.ajax({
        method: "GET",
        url: "/eratwelve",
    }).done(function(data) {
        for(var i = 0; i < data.length; i++){
            console.log(data[i].full_name)
            var div = $("<div id='history-template'>");
            var p = $("<p class='history-name'>")
            var a = $("<a>")
            a.attr("href", "/guest/" + data[i].full_name);
            a.html(data[i].full_name);
            $(p).append(a);
            $(div).append(p);
            $("#time-era-twelve").append(div);
        }
    });
})

$(document).one("click", "#button-thirdteen", function(event){
    event.preventDefault();
    
    $.ajax({
        method: "GET",
        url: "/erathirdteen",
    }).done(function(data) {
        for(var i = 0; i < data.length; i++){
            console.log(data[i].full_name)
            var div = $("<div id='history-template'>");
            var p = $("<p class='history-name'>")
            var a = $("<a>")
            a.attr("href", "/guest/" + data[i].full_name);
            a.html(data[i].full_name);
            $(p).append(a);
            $(div).append(p);
            $("#time-era-thirdteen").append(div);
        }
    });
})

$(document).one("click", "#button-fourteen", function(event){
    event.preventDefault();
    
    $.ajax({
        method: "GET",
        url: "/erafourteen",
    }).done(function(data) {
        for(var i = 0; i < data.length; i++){
            console.log(data[i].full_name)
            var div = $("<div id='history-template'>");
            var p = $("<p class='history-name'>")
            var a = $("<a>")
            a.attr("href", "/guest/" + data[i].full_name);
            a.html(data[i].full_name);
            $(p).append(a);
            $(div).append(p);
            $("#time-era-fourteen").append(div);
        }
    });
})

$(document).one("click", "#button-fiveteen", function(event){
    event.preventDefault();
    
    $.ajax({
        method: "GET",
        url: "/erafiveteen",
    }).done(function(data) {
        for(var i = 0; i < data.length; i++){
            console.log(data[i].full_name)
            var div = $("<div id='history-template'>");
            var p = $("<p class='history-name'>")
            var a = $("<a>")
            a.attr("href", "/guest/" + data[i].full_name);
            a.html(data[i].full_name);
            $(p).append(a);
            $(div).append(p);
            $("#time-era-fiveteen").append(div);
        }
    });
})

$(document).one("click", "#button-sixteen", function(event){
    event.preventDefault();
    
    $.ajax({
        method: "GET",
        url: "/erasixteen",
    }).done(function(data) {
        for(var i = 0; i < data.length; i++){
            console.log(data[i].full_name)
            var div = $("<div id='history-template'>");
            var p = $("<p class='history-name'>")
            var a = $("<a>")
            a.attr("href", "/guest/" + data[i].full_name);
            a.html(data[i].full_name);
            $(p).append(a);
            $(div).append(p);
            $("#time-era-sixteen").append(div);
        }
    });
})

$(document).one("click", "#button-seventeen", function(event){
    event.preventDefault();
    
    $.ajax({
        method: "GET",
        url: "/eraseventeen",
    }).done(function(data) {
        for(var i = 0; i < data.length; i++){
            console.log(data[i].full_name)
            var div = $("<div id='history-template'>");
            var p = $("<p class='history-name'>")
            var a = $("<a>")
            a.attr("href", "/guest/" + data[i].full_name);
            a.html(data[i].full_name);
            $(p).append(a);
            $(div).append(p);
            $("#time-era-seventeen").append(div);
        }
    });
})

$(document).one("click", "#button-eighteen", function(event){
    event.preventDefault();
    
    $.ajax({
        method: "GET",
        url: "/eraeightteen",
    }).done(function(data) {
        for(var i = 0; i < data.length; i++){
            console.log(data[i].full_name)
            var div = $("<div id='history-template'>");
            var p = $("<p class='history-name'>")
            var a = $("<a>")
            a.attr("href", "/guest/" + data[i].full_name);
            a.html(data[i].full_name);
            $(p).append(a);
            $(div).append(p);
            $("#time-era-eighteen").append(div);
        }
    });
})

$(document).one("click", "#button-nineteen", function(event){
    event.preventDefault();
    
    $.ajax({
        method: "GET",
        url: "/eranineteen",
    }).done(function(data) {
        for(var i = 0; i < data.length; i++){
            console.log(data[i].full_name)
            var div = $("<div id='history-template'>");
            var p = $("<p class='history-name'>")
            var a = $("<a>")
            a.attr("href", "/guest/" + data[i].full_name);
            a.html(data[i].full_name);
            $(p).append(a);
            $(div).append(p);
            $("#time-era-nineteen").append(div);
        }
    });
})

$(document).one("click", "#button-twenty", function(event){
    event.preventDefault();
    
    $.ajax({
        method: "GET",
        url: "/eratwenty",
    }).done(function(data) {
        for(var i = 0; i < data.length; i++){
            console.log(data[i].full_name)
            var div = $("<div id='history-template'>");
            var p = $("<p class='history-name'>")
            var a = $("<a>")
            a.attr("href", "/guest/" + data[i].full_name);
            a.html(data[i].full_name);
            $(p).append(a);
            $(div).append(p);
            $("#time-era-twenty").append(div);
        }
    });
})

$(document).one("click", "#button-twentyone", function(event){
    event.preventDefault();
    
    $.ajax({
        method: "GET",
        url: "/eratwentyone",
    }).done(function(data) {
        for(var i = 0; i < data.length; i++){
            console.log(data[i].full_name)
            var div = $("<div id='history-template'>");
            var p = $("<p class='history-name'>")
            var a = $("<a>")
            a.attr("href", "/guest/" + data[i].full_name);
            a.html(data[i].full_name);
            $(p).append(a);
            $(div).append(p);
            $("#time-era-twentyone").append(div);
        }
    });
})

$(document).one("click", "#button-twentytwo", function(event){
    event.preventDefault();
    
    $.ajax({
        method: "GET",
        url: "/eratwentytwo",
    }).done(function(data) {
        for(var i = 0; i < data.length; i++){
            console.log(data[i].full_name)
            var div = $("<div id='history-template'>");
            var p = $("<p class='history-name'>")
            var a = $("<a>")
            a.attr("href", "/guest/" + data[i].full_name);
            a.html(data[i].full_name);
            $(p).append(a);
            $(div).append(p);
            $("#time-era-twentytwo").append(div);
        }
    });
})

$(document).one("click", "#button-twentythree", function(event){
    event.preventDefault();
    
    $.ajax({
        method: "GET",
        url: "/eratwentythree",
    }).done(function(data) {
        for(var i = 0; i < data.length; i++){
            console.log(data[i].full_name)
            var div = $("<div id='history-template'>");
            var p = $("<p class='history-name'>")
            var a = $("<a>")
            a.attr("href", "/guest/" + data[i].full_name);
            a.html(data[i].full_name);
            $(p).append(a);
            $(div).append(p);
            $("#time-era-twentythree").append(div);
        }
    });
})

$(document).one("click", "#button-twentyfour", function(event){
    event.preventDefault();
    
    $.ajax({
        method: "GET",
        url: "/eratwentyfour",
    }).done(function(data) {
        for(var i = 0; i < data.length; i++){
            console.log(data[i].full_name)
            var div = $("<div id='history-template'>");
            var p = $("<p class='history-name'>")
            var a = $("<a>")
            a.attr("href", "/guest/" + data[i].full_name);
            a.html(data[i].full_name);
            $(p).append(a);
            $(div).append(p);
            $("#time-era-twentyfour").append(div);
        }
    });
})

$(document).one("click", "#button-twentyfive", function(event){
    event.preventDefault();
    
    $.ajax({
        method: "GET",
        url: "/eratwentyfive",
    }).done(function(data) {
        for(var i = 0; i < data.length; i++){
            console.log(data[i].full_name)
            var div = $("<div id='history-template'>");
            var p = $("<p class='history-name'>")
            var a = $("<a>")
            a.attr("href", "/guest/" + data[i].full_name);
            a.html(data[i].full_name);
            $(p).append(a);
            $(div).append(p);
            $("#time-era-twentyfive").append(div);
        }
    });
})

$(document).one("click", "#button-twentysix", function(event){
    event.preventDefault();
    
    $.ajax({
        method: "GET",
        url: "/eratwentysix",
    }).done(function(data) {
        for(var i = 0; i < data.length; i++){
            console.log(data[i].full_name)
            var div = $("<div id='history-template'>");
            var p = $("<p class='history-name'>")
            var a = $("<a>")
            a.attr("href", "/guest/" + data[i].full_name);
            a.html(data[i].full_name);
            $(p).append(a);
            $(div).append(p);
            $("#time-era-twentysix").append(div);
        }
    });
})

$(document).one("click", "#button-twentyseven", function(event){
    event.preventDefault();
    
    $.ajax({
        method: "GET",
        url: "/eratwentyseven",
    }).done(function(data) {
        for(var i = 0; i < data.length; i++){
            console.log(data[i].full_name)
            var div = $("<div id='history-template'>");
            var p = $("<p class='history-name'>")
            var a = $("<a>")
            a.attr("href", "/guest/" + data[i].full_name);
            a.html(data[i].full_name);
            $(p).append(a);
            $(div).append(p);
            $("#time-era-twentyseven").append(div);
        }
    });
})

$(document).one("click", "#button-twentyeight", function(event){
    event.preventDefault();
    
    $.ajax({
        method: "GET",
        url: "/eratwentyeight",
    }).done(function(data) {
        for(var i = 0; i < data.length; i++){
            console.log(data[i].full_name)
            var div = $("<div id='history-template'>");
            var p = $("<p class='history-name'>")
            var a = $("<a>")
            a.attr("href", "/guest/" + data[i].full_name);
            a.html(data[i].full_name);
            $(p).append(a);
            $(div).append(p);
            $("#time-era-twentyeight").append(div);
        }
    });
})


$(document).one("click", "#button-twentynine", function(event){
    event.preventDefault();
    
    $.ajax({
        method: "GET",
        url: "/eratwentynine",
    }).done(function(data) {
        for(var i = 0; i < data.length; i++){
            console.log(data[i].full_name)
            var div = $("<div id='history-template'>");
            var p = $("<p class='history-name'>")
            var a = $("<a>")
            a.attr("href", "/guest/" + data[i].full_name);
            a.html(data[i].full_name);
            $(p).append(a);
            $(div).append(p);
            $("#time-era-twentynine").append(div);
        }
    });
})

$(document).one("click", "#button-thirty", function(event){
    event.preventDefault();
    
    $.ajax({
        method: "GET",
        url: "/erathirty",
    }).done(function(data) {
        for(var i = 0; i < data.length; i++){
            console.log(data[i].full_name)
            var div = $("<div id='history-template'>");
            var p = $("<p class='history-name'>")
            var a = $("<a>")
            a.attr("href", "/guest/" + data[i].full_name);
            a.html(data[i].full_name);
            $(p).append(a);
            $(div).append(p);
            $("#time-era-thirty").append(div);
        }
    });
});



$(document).on("click", "#default-one", function(event){
    event.preventDefault();

    $.ajax({
        method: "GET",
        url: "/default-one"
    }).done(function(data){
        $("#time-era-one").empty();

        for(var i = 0; i < data.length; i++){
            console.log(data[i].full_name)
            var div = $("<div id='history-template'>");
            var p = $("<p class='history-name'>")
            var a = $("<a>")
            //a.attr("href", "/guest/" + data[i].article_id);
            a.attr("href", "/guest/" + data[i].full_name);
            a.html(data[i].full_name);
            $(p).append(a);
            $(div).append(p);
            $("#time-era-one").append(div);
        }
    })
})

$(document).on("click", "#default-two", function(event){
    event.preventDefault();

    $.ajax({
        method: "GET",
        url: "/default-two"
    }).done(function(data){
        $("#time-era-two").empty();

        for(var i = 0; i < data.length; i++){
            console.log(data[i].full_name)
            var div = $("<div id='history-template'>");
            var p = $("<p class='history-name'>")
            var a = $("<a>")
            //a.attr("href", "/guest/" + data[i].article_id);
            a.attr("href", "/guest/" + data[i].full_name);
            a.html(data[i].full_name);
            $(p).append(a);
            $(div).append(p);
            $("#time-era-two").append(div);
        }
    })
})

$(document).on("click", "#default-three", function(event){
    event.preventDefault();

    $.ajax({
        method: "GET",
        url: "/default-three"
    }).done(function(data){
        $("#time-era-three").empty();

        for(var i = 0; i < data.length; i++){
            console.log(data[i].full_name)
            var div = $("<div id='history-template'>");
            var p = $("<p class='history-name'>")
            var a = $("<a>")
            //a.attr("href", "/guest/" + data[i].article_id);
            a.attr("href", "/guest/" + data[i].full_name);
            a.html(data[i].full_name);
            $(p).append(a);
            $(div).append(p);
            $("#time-era-three").append(div);
        }
    })
})

$(document).on("click", "#default-four", function(event){
    event.preventDefault();

    $.ajax({
        method: "GET",
        url: "/default-four"
    }).done(function(data){
        $("#time-era-four").empty();

        for(var i = 0; i < data.length; i++){
            console.log(data[i].full_name)
            var div = $("<div id='history-template'>");
            var p = $("<p class='history-name'>")
            var a = $("<a>")
            //a.attr("href", "/guest/" + data[i].article_id);
            a.attr("href", "/guest/" + data[i].full_name);
            a.html(data[i].full_name);
            $(p).append(a);
            $(div).append(p);
            $("#time-era-four").append(div);
        }
    })
})

$(document).on("click", "#default-five", function(event){
    event.preventDefault();

    $.ajax({
        method: "GET",
        url: "/default-five"
    }).done(function(data){
        $("#time-era-five").empty();

        for(var i = 0; i < data.length; i++){
            console.log(data[i].full_name)
            var div = $("<div id='history-template'>");
            var p = $("<p class='history-name'>")
            var a = $("<a>")
            //a.attr("href", "/guest/" + data[i].article_id);
            a.attr("href", "/guest/" + data[i].full_name);
            a.html(data[i].full_name);
            $(p).append(a);
            $(div).append(p);
            $("#time-era-five").append(div);
        }
    })
})

$(document).on("click", "#default-six", function(event){
    event.preventDefault();

    $.ajax({
        method: "GET",
        url: "/default-six"
    }).done(function(data){
        $("#time-era-six").empty();

        for(var i = 0; i < data.length; i++){
            console.log(data[i].full_name)
            var div = $("<div id='history-template'>");
            var p = $("<p class='history-name'>")
            var a = $("<a>")
            //a.attr("href", "/guest/" + data[i].article_id);
            a.attr("href", "/guest/" + data[i].full_name);
            a.html(data[i].full_name);
            $(p).append(a);
            $(div).append(p);
            $("#time-era-six").append(div);
        }
    })
})

$(document).on("click", "#default-seven", function(event){
    event.preventDefault();

    $.ajax({
        method: "GET",
        url: "/default-seven"
    }).done(function(data){
        $("#time-era-seven").empty();

        for(var i = 0; i < data.length; i++){
            console.log(data[i].full_name)
            var div = $("<div id='history-template'>");
            var p = $("<p class='history-name'>")
            var a = $("<a>")
            //a.attr("href", "/guest/" + data[i].article_id);
            a.attr("href", "/guest/" + data[i].full_name);
            a.html(data[i].full_name);
            $(p).append(a);
            $(div).append(p);
            $("#time-era-seven").append(div);
        }
    })
})

$(document).on("click", "#default-eight", function(event){
    event.preventDefault();

    $.ajax({
        method: "GET",
        url: "/default-eight"
    }).done(function(data){
        $("#time-era-eight").empty();

        for(var i = 0; i < data.length; i++){
            console.log(data[i].full_name)
            var div = $("<div id='history-template'>");
            var p = $("<p class='history-name'>")
            var a = $("<a>")
            //a.attr("href", "/guest/" + data[i].article_id);
            a.attr("href", "/guest/" + data[i].full_name);
            a.html(data[i].full_name);
            $(p).append(a);
            $(div).append(p);
            $("#time-era-eight").append(div);
        }
    })
})

$(document).on("click", "#default-nine", function(event){
    event.preventDefault();

    $.ajax({
        method: "GET",
        url: "/default-nine"
    }).done(function(data){
        $("#time-era-nine").empty();

        for(var i = 0; i < data.length; i++){
            console.log(data[i].full_name)
            var div = $("<div id='history-template'>");
            var p = $("<p class='history-name'>")
            var a = $("<a>")
            //a.attr("href", "/guest/" + data[i].article_id);
            a.attr("href", "/guest/" + data[i].full_name);
            a.html(data[i].full_name);
            $(p).append(a);
            $(div).append(p);
            $("#time-era-nine").append(div);
        }
    })
})

$(document).on("click", "#default-ten", function(event){
    event.preventDefault();

    $.ajax({
        method: "GET",
        url: "/default-ten"
    }).done(function(data){
        $("#time-era-ten").empty();

        for(var i = 0; i < data.length; i++){
            console.log(data[i].full_name)
            var div = $("<div id='history-template'>");
            var p = $("<p class='history-name'>")
            var a = $("<a>")
            //a.attr("href", "/guest/" + data[i].article_id);
            a.attr("href", "/guest/" + data[i].full_name);
            a.html(data[i].full_name);
            $(p).append(a);
            $(div).append(p);
            $("#time-era-ten").append(div);
        }
    })
})

$(document).on("click", "#default-eleven", function(event){
    event.preventDefault();

    $.ajax({
        method: "GET",
        url: "/default-eleven"
    }).done(function(data){
        $("#time-era-eleven").empty();

        for(var i = 0; i < data.length; i++){
            console.log(data[i].full_name)
            var div = $("<div id='history-template'>");
            var p = $("<p class='history-name'>")
            var a = $("<a>")
            //a.attr("href", "/guest/" + data[i].article_id);
            a.attr("href", "/guest/" + data[i].full_name);
            a.html(data[i].full_name);
            $(p).append(a);
            $(div).append(p);
            $("#time-era-eleven").append(div);
        }
    })
})

$(document).on("click", "#default-twelve", function(event){
    event.preventDefault();

    $.ajax({
        method: "GET",
        url: "/default-twelve"
    }).done(function(data){
        $("#time-era-twelve").empty();

        for(var i = 0; i < data.length; i++){
            console.log(data[i].full_name)
            var div = $("<div id='history-template'>");
            var p = $("<p class='history-name'>")
            var a = $("<a>")
            //a.attr("href", "/guest/" + data[i].article_id);
            a.attr("href", "/guest/" + data[i].full_name);
            a.html(data[i].full_name);
            $(p).append(a);
            $(div).append(p);
            $("#time-era-twelve").append(div);
        }
    })
})

$(document).on("click", "#default-thirdteen", function(event){
    event.preventDefault();

    $.ajax({
        method: "GET",
        url: "/default-thirdteen"
    }).done(function(data){
        $("#time-era-thirdteen").empty();

        for(var i = 0; i < data.length; i++){
            console.log(data[i].full_name)
            var div = $("<div id='history-template'>");
            var p = $("<p class='history-name'>")
            var a = $("<a>")
            //a.attr("href", "/guest/" + data[i].article_id);
            a.attr("href", "/guest/" + data[i].full_name);
            a.html(data[i].full_name);
            $(p).append(a);
            $(div).append(p);
            $("#time-era-thirdteen").append(div);
        }
    })
})

$(document).on("click", "#default-fourteen", function(event){
    event.preventDefault();

    $.ajax({
        method: "GET",
        url: "/default-fourteen"
    }).done(function(data){
        $("#time-era-fourteen").empty();

        for(var i = 0; i < data.length; i++){
            console.log(data[i].full_name)
            var div = $("<div id='history-template'>");
            var p = $("<p class='history-name'>")
            var a = $("<a>")
            //a.attr("href", "/guest/" + data[i].article_id);
            a.attr("href", "/guest/" + data[i].full_name);
            a.html(data[i].full_name);
            $(p).append(a);
            $(div).append(p);
            $("#time-era-fourteen").append(div);
        }
    })
})

$(document).on("click", "#default-fiveteen", function(event){
    event.preventDefault();

    $.ajax({
        method: "GET",
        url: "/default-fiveteen"
    }).done(function(data){
        $("#time-era-fiveteen").empty();

        for(var i = 0; i < data.length; i++){
            console.log(data[i].full_name)
            var div = $("<div id='history-template'>");
            var p = $("<p class='history-name'>")
            var a = $("<a>")
            //a.attr("href", "/guest/" + data[i].article_id);
            a.attr("href", "/guest/" + data[i].full_name);
            a.html(data[i].full_name);
            $(p).append(a);
            $(div).append(p);
            $("#time-era-fiveteen").append(div);
        }
    })
})

$(document).on("click", "#default-sixteen", function(event){
    event.preventDefault();

    $.ajax({
        method: "GET",
        url: "/default-sixteen"
    }).done(function(data){
        $("#time-era-sixteen").empty();

        for(var i = 0; i < data.length; i++){
            console.log(data[i].full_name)
            var div = $("<div id='history-template'>");
            var p = $("<p class='history-name'>")
            var a = $("<a>")
            //a.attr("href", "/guest/" + data[i].article_id);
            a.attr("href", "/guest/" + data[i].full_name);
            a.html(data[i].full_name);
            $(p).append(a);
            $(div).append(p);
            $("#time-era-sixteen").append(div);
        }
    })
})

$(document).on("click", "#default-seventeen", function(event){
    event.preventDefault();

    $.ajax({
        method: "GET",
        url: "/default-seventeen"
    }).done(function(data){
        $("#time-era-seventeen").empty();

        for(var i = 0; i < data.length; i++){
            console.log(data[i].full_name)
            var div = $("<div id='history-template'>");
            var p = $("<p class='history-name'>")
            var a = $("<a>")
            //a.attr("href", "/guest/" + data[i].article_id);
            a.attr("href", "/guest/" + data[i].full_name);
            a.html(data[i].full_name);
            $(p).append(a);
            $(div).append(p);
            $("#time-era-seventeen").append(div);
        }
    })
})

$(document).on("click", "#default-eighteen", function(event){
    event.preventDefault();

    $.ajax({
        method: "GET",
        url: "/default-eighteen"
    }).done(function(data){
        $("#time-era-eighteen").empty();

        for(var i = 0; i < data.length; i++){
            console.log(data[i].full_name)
            var div = $("<div id='history-template'>");
            var p = $("<p class='history-name'>")
            var a = $("<a>")
            //a.attr("href", "/guest/" + data[i].article_id);
            a.attr("href", "/guest/" + data[i].full_name);
            a.html(data[i].full_name);
            $(p).append(a);
            $(div).append(p);
            $("#time-era-eighteen").append(div);
        }
    })
})

$(document).on("click", "#default-nineteen", function(event){
    event.preventDefault();

    $.ajax({
        method: "GET",
        url: "/default-nineteen"
    }).done(function(data){
        $("#time-era-nineteen").empty();

        for(var i = 0; i < data.length; i++){
            console.log(data[i].full_name)
            var div = $("<div id='history-template'>");
            var p = $("<p class='history-name'>")
            var a = $("<a>")
            //a.attr("href", "/guest/" + data[i].article_id);
            a.attr("href", "/guest/" + data[i].full_name);
            a.html(data[i].full_name);
            $(p).append(a);
            $(div).append(p);
            $("#time-era-nineteen").append(div);
        }
    })
})

$(document).on("click", "#default-twenty", function(event){
    event.preventDefault();

    $.ajax({
        method: "GET",
        url: "/default-twenty"
    }).done(function(data){
        $("#time-era-twenty").empty();

        for(var i = 0; i < data.length; i++){
            console.log(data[i].full_name)
            var div = $("<div id='history-template'>");
            var p = $("<p class='history-name'>")
            var a = $("<a>")
            //a.attr("href", "/guest/" + data[i].article_id);
            a.attr("href", "/guest/" + data[i].full_name);
            a.html(data[i].full_name);
            $(p).append(a);
            $(div).append(p);
            $("#time-era-twenty").append(div);
        }
    })
})

$(document).on("click", "#default-twentyone", function(event){
    event.preventDefault();

    $.ajax({
        method: "GET",
        url: "/default-twentyone"
    }).done(function(data){
        $("#time-era-twentyone").empty();

        for(var i = 0; i < data.length; i++){
            console.log(data[i].full_name)
            var div = $("<div id='history-template'>");
            var p = $("<p class='history-name'>")
            var a = $("<a>")
            //a.attr("href", "/guest/" + data[i].article_id);
            a.attr("href", "/guest/" + data[i].full_name);
            a.html(data[i].full_name);
            $(p).append(a);
            $(div).append(p);
            $("#time-era-twentyone").append(div);
        }
    })
})

$(document).on("click", "#default-twentytwo", function(event){
    event.preventDefault();

    $.ajax({
        method: "GET",
        url: "/default-twentytwo"
    }).done(function(data){
        $("#time-era-twentytwo").empty();

        for(var i = 0; i < data.length; i++){
            console.log(data[i].full_name)
            var div = $("<div id='history-template'>");
            var p = $("<p class='history-name'>")
            var a = $("<a>")
            //a.attr("href", "/guest/" + data[i].article_id);
            a.attr("href", "/guest/" + data[i].full_name);
            a.html(data[i].full_name);
            $(p).append(a);
            $(div).append(p);
            $("#time-era-twentytwo").append(div);
        }
    })
})

$(document).on("click", "#default-twentythree", function(event){
    event.preventDefault();

    $.ajax({
        method: "GET",
        url: "/default-twentythree"
    }).done(function(data){
        $("#time-era-twentythree").empty();

        for(var i = 0; i < data.length; i++){
            console.log(data[i].full_name)
            var div = $("<div id='history-template'>");
            var p = $("<p class='history-name'>")
            var a = $("<a>")
            //a.attr("href", "/guest/" + data[i].article_id);
            a.attr("href", "/guest/" + data[i].full_name);
            a.html(data[i].full_name);
            $(p).append(a);
            $(div).append(p);
            $("#time-era-twentythree").append(div);
        }
    })
})


$(document).on("click", "#default-twentyfour", function(event){
    event.preventDefault();

    $.ajax({
        method: "GET",
        url: "/default-twentyfour"
    }).done(function(data){
        $("#time-era-twentyfour").empty();

        for(var i = 0; i < data.length; i++){
            console.log(data[i].full_name)
            var div = $("<div id='history-template'>");
            var p = $("<p class='history-name'>")
            var a = $("<a>")
            //a.attr("href", "/guest/" + data[i].article_id);
            a.attr("href", "/guest/" + data[i].full_name);
            a.html(data[i].full_name);
            $(p).append(a);
            $(div).append(p);
            $("#time-era-twentyfour").append(div);
        }
    })
})

$(document).on("click", "#default-twentyfive", function(event){
    event.preventDefault();

    $.ajax({
        method: "GET",
        url: "/default-twentyfive"
    }).done(function(data){
        $("#time-era-twentyfive").empty();

        for(var i = 0; i < data.length; i++){
            console.log(data[i].full_name)
            var div = $("<div id='history-template'>");
            var p = $("<p class='history-name'>")
            var a = $("<a>")
            //a.attr("href", "/guest/" + data[i].article_id);
            a.attr("href", "/guest/" + data[i].full_name);
            a.html(data[i].full_name);
            $(p).append(a);
            $(div).append(p);
            $("#time-era-twentyfive").append(div);
        }
    })
})

$(document).on("click", "#default-twentysix", function(event){
    event.preventDefault();

    $.ajax({
        method: "GET",
        url: "/default-twentysix"
    }).done(function(data){
        $("#time-era-twentysix").empty();

        for(var i = 0; i < data.length; i++){
            console.log(data[i].full_name)
            var div = $("<div id='history-template'>");
            var p = $("<p class='history-name'>")
            var a = $("<a>")
            //a.attr("href", "/guest/" + data[i].article_id);
            a.attr("href", "/guest/" + data[i].full_name);
            a.html(data[i].full_name);
            $(p).append(a);
            $(div).append(p);
            $("#time-era-twentysix").append(div);
        }
    })
})

$(document).on("click", "#default-twentyseven", function(event){
    event.preventDefault();

    $.ajax({
        method: "GET",
        url: "/default-twentyseven"
    }).done(function(data){
        $("#time-era-twentyseven").empty();

        for(var i = 0; i < data.length; i++){
            console.log(data[i].full_name)
            var div = $("<div id='history-template'>");
            var p = $("<p class='history-name'>")
            var a = $("<a>")
            //a.attr("href", "/guest/" + data[i].article_id);
            a.attr("href", "/guest/" + data[i].full_name);
            a.html(data[i].full_name);
            $(p).append(a);
            $(div).append(p);
            $("#time-era-twentyseven").append(div);
        }
    })
})

$(document).on("click", "#default-twentyeight", function(event){
    event.preventDefault();

    $.ajax({
        method: "GET",
        url: "/default-twentyeight"
    }).done(function(data){
        $("#time-era-twentyeight").empty();

        for(var i = 0; i < data.length; i++){
            console.log(data[i].full_name)
            var div = $("<div id='history-template'>");
            var p = $("<p class='history-name'>")
            var a = $("<a>")
            //a.attr("href", "/guest/" + data[i].article_id);
            a.attr("href", "/guest/" + data[i].full_name);
            a.html(data[i].full_name);
            $(p).append(a);
            $(div).append(p);
            $("#time-era-twentyeight").append(div);
        }
    })
})

$(document).on("click", "#default-twentynine", function(event){
    event.preventDefault();

    $.ajax({
        method: "GET",
        url: "/default-twentynine"
    }).done(function(data){
        $("#time-era-twentynine").empty();

        for(var i = 0; i < data.length; i++){
            console.log(data[i].full_name)
            var div = $("<div id='history-template'>");
            var p = $("<p class='history-name'>")
            var a = $("<a>")
            //a.attr("href", "/guest/" + data[i].article_id);
            a.attr("href", "/guest/" + data[i].full_name);
            a.html(data[i].full_name);
            $(p).append(a);
            $(div).append(p);
            $("#time-era-twentynine").append(div);
        }
    })
})


$(document).on("click", "#default-thirty", function(event){
    event.preventDefault();

    $.ajax({
        method: "GET",
        url: "/default-thirty"
    }).done(function(data){
        $("#time-era-thirty").empty();

        for(var i = 0; i < data.length; i++){
            console.log(data[i].full_name)
            var div = $("<div id='history-template'>");
            var p = $("<p class='history-name'>")
            var a = $("<a>")
            //a.attr("href", "/guest/" + data[i].article_id);
            a.attr("href", "/guest/" + data[i].full_name);
            a.html(data[i].full_name);
            $(p).append(a);
            $(div).append(p);
            $("#time-era-thirty").append(div);
        }
    })
})







































$(document).on("click", "#alphabetical-one", function(event){
    event.preventDefault();

    $.ajax({
        method: "GET",
        url: "/alphabetical-one",
    }).done(function(data){
       $("#time-era-one").empty();


        for(var i = 0; i < data.length; i++){
        console.log(data[i].full_name.charAt(0))
        var div = $("<div id='history-template'>");
        var span = $("<span class='history-letter'>");
        var p = $("<p class='history-name'>")
        var a = $("<a>")
        a.attr("href", "/guest/" + data[i].full_name);
        a.html(data[i].full_name);
        $(p).append(a);
        $(div).append(span, p);
        $("#time-era-one").append(div);
        }

    })
})

$(document).on("click", "#alphabetical-two", function(event){
    event.preventDefault();

    $.ajax({
        method: "GET",
        url: "/alphabetical-two",
    }).done(function(data){
       $("#time-era-two").empty();


        for(var i = 0; i < data.length; i++){
        console.log(data[i].full_name.charAt(0))
        var div = $("<div id='history-template'>");
        var span = $("<span class='history-letter'>");
        var p = $("<p class='history-name'>")
        var a = $("<a>")
        a.attr("href", "/guest/" + data[i].full_name);
        a.html(data[i].full_name);
        $(p).append(a);
        $(div).append(span, p);
        $("#time-era-two").append(div);
        }

    })
})

$(document).on("click", "#alphabetical-three", function(event){
    event.preventDefault();

    $.ajax({
        method: "GET",
        url: "/alphabetical-three",
    }).done(function(data){
       $("#time-era-three").empty();


        for(var i = 0; i < data.length; i++){
        console.log(data[i].full_name.charAt(0))
        var div = $("<div id='history-template'>");
        var span = $("<span class='history-letter'>");
        var p = $("<p class='history-name'>")
        var a = $("<a>")
        a.attr("href", "/guest/" + data[i].full_name);
        a.html(data[i].full_name);
        $(p).append(a);
        $(div).append(span, p);
        $("#time-era-three").append(div);
        }

    })
})

$(document).on("click", "#alphabetical-four", function(event){
    event.preventDefault();

    $.ajax({
        method: "GET",
        url: "/alphabetical-four",
    }).done(function(data){
       $("#time-era-four").empty();


        for(var i = 0; i < data.length; i++){
        console.log(data[i].full_name.charAt(0))
        var div = $("<div id='history-template'>");
        var span = $("<span class='history-letter'>");
        var p = $("<p class='history-name'>")
        var a = $("<a>")
        a.attr("href", "/guest/" + data[i].full_name);
        a.html(data[i].full_name);
        $(p).append(a);
        $(div).append(span, p);
        $("#time-era-four").append(div);
        }

    })
})

$(document).on("click", "#alphabetical-five", function(event){
    event.preventDefault();

    $.ajax({
        method: "GET",
        url: "/alphabetical-five",
    }).done(function(data){
       $("#time-era-five").empty();


        for(var i = 0; i < data.length; i++){
        console.log(data[i].full_name.charAt(0))
        var div = $("<div id='history-template'>");
        var span = $("<span class='history-letter'>");
        var p = $("<p class='history-name'>")
        var a = $("<a>")
        a.attr("href", "/guest/" + data[i].full_name);
        a.html(data[i].full_name);
        $(p).append(a);
        $(div).append(span, p);
        $("#time-era-five").append(div);
        }

    })
})

$(document).on("click", "#alphabetical-six", function(event){
    event.preventDefault();

    $.ajax({
        method: "GET",
        url: "/alphabetical-six",
    }).done(function(data){
       $("#time-era-six").empty();


        for(var i = 0; i < data.length; i++){
        console.log(data[i].full_name.charAt(0))
        var div = $("<div id='history-template'>");
        var span = $("<span class='history-letter'>");
        var p = $("<p class='history-name'>")
        var a = $("<a>")
        a.attr("href", "/guest/" + data[i].full_name);
        a.html(data[i].full_name);
        $(p).append(a);
        $(div).append(span, p);
        $("#time-era-six").append(div);
        }

    })
})

$(document).on("click", "#alphabetical-seven", function(event){
    event.preventDefault();

    $.ajax({
        method: "GET",
        url: "/alphabetical-seven",
    }).done(function(data){
       $("#time-era-seven").empty();


        for(var i = 0; i < data.length; i++){
        console.log(data[i].full_name.charAt(0))
        var div = $("<div id='history-template'>");
        var span = $("<span class='history-letter'>");
        var p = $("<p class='history-name'>")
        var a = $("<a>")
        a.attr("href", "/guest/" + data[i].full_name);
        a.html(data[i].full_name);
        $(p).append(a);
        $(div).append(span, p);
        $("#time-era-seven").append(div);
        }

    })
})

$(document).on("click", "#alphabetical-eight", function(event){
    event.preventDefault();

    $.ajax({
        method: "GET",
        url: "/alphabetical-eight",
    }).done(function(data){
       $("#time-era-eight").empty();


        for(var i = 0; i < data.length; i++){
        console.log(data[i].full_name.charAt(0))
        var div = $("<div id='history-template'>");
        var span = $("<span class='history-letter'>");
        var p = $("<p class='history-name'>")
        var a = $("<a>")
        a.attr("href", "/guest/" + data[i].full_name);
        a.html(data[i].full_name);
        $(p).append(a);
        $(div).append(span, p);
        $("#time-era-eight").append(div);
        }

    })
})

$(document).on("click", "#alphabetical-nine", function(event){
    event.preventDefault();

    $.ajax({
        method: "GET",
        url: "/alphabetical-nine",
    }).done(function(data){
       $("#time-era-nine").empty();


        for(var i = 0; i < data.length; i++){
        console.log(data[i].full_name.charAt(0))
        var div = $("<div id='history-template'>");
        var span = $("<span class='history-letter'>");
        var p = $("<p class='history-name'>")
        var a = $("<a>")
        a.attr("href", "/guest/" + data[i].full_name);
        a.html(data[i].full_name);
        $(p).append(a);
        $(div).append(span, p);
        $("#time-era-nine").append(div);
        }

    })
})

$(document).on("click", "#alphabetical-ten", function(event){
    event.preventDefault();

    $.ajax({
        method: "GET",
        url: "/alphabetical-ten",
    }).done(function(data){
       $("#time-era-ten").empty();


        for(var i = 0; i < data.length; i++){
        console.log(data[i].full_name.charAt(0))
        var div = $("<div id='history-template'>");
        var span = $("<span class='history-letter'>");
        var p = $("<p class='history-name'>")
        var a = $("<a>")
        a.attr("href", "/guest/" + data[i].full_name);
        a.html(data[i].full_name);
        $(p).append(a);
        $(div).append(span, p);
        $("#time-era-ten").append(div);
        }

    })
})

$(document).on("click", "#alphabetical-eleven", function(event){
    event.preventDefault();

    $.ajax({
        method: "GET",
        url: "/alphabetical-eleven",
    }).done(function(data){
       $("#time-era-eleven").empty();


        for(var i = 0; i < data.length; i++){
        console.log(data[i].full_name.charAt(0))
        var div = $("<div id='history-template'>");
        var span = $("<span class='history-letter'>");
        var p = $("<p class='history-name'>")
        var a = $("<a>")
        a.attr("href", "/guest/" + data[i].full_name);
        a.html(data[i].full_name);
        $(p).append(a);
        $(div).append(span, p);
        $("#time-era-eleven").append(div);
        }

    })
})

$(document).on("click", "#alphabetical-twelve", function(event){
    event.preventDefault();

    $.ajax({
        method: "GET",
        url: "/alphabetical-twelve",
    }).done(function(data){
       $("#time-era-twelve").empty();


        for(var i = 0; i < data.length; i++){
        console.log(data[i].full_name.charAt(0))
        var div = $("<div id='history-template'>");
        var span = $("<span class='history-letter'>");
        var p = $("<p class='history-name'>")
        var a = $("<a>")
        a.attr("href", "/guest/" + data[i].full_name);
        a.html(data[i].full_name);
        $(p).append(a);
        $(div).append(span, p);
        $("#time-era-twelve").append(div);
        }

    })
})

$(document).on("click", "#alphabetical-thirdteen", function(event){
    event.preventDefault();

    $.ajax({
        method: "GET",
        url: "/alphabetical-thirdteen",
    }).done(function(data){
       $("#time-era-thirdteen").empty();


        for(var i = 0; i < data.length; i++){
        console.log(data[i].full_name.charAt(0))
        var div = $("<div id='history-template'>");
        var span = $("<span class='history-letter'>");
        var p = $("<p class='history-name'>")
        var a = $("<a>")
        a.attr("href", "/guest/" + data[i].full_name);
        a.html(data[i].full_name);
        $(p).append(a);
        $(div).append(span, p);
        $("#time-era-thirdteen").append(div);
        }

    })
})

$(document).on("click", "#alphabetical-fourteen", function(event){
    event.preventDefault();

    $.ajax({
        method: "GET",
        url: "/alphabetical-fourteen",
    }).done(function(data){
       $("#time-era-fourteen").empty();


        for(var i = 0; i < data.length; i++){
        console.log(data[i].full_name.charAt(0))
        var div = $("<div id='history-template'>");
        var span = $("<span class='history-letter'>");
        var p = $("<p class='history-name'>")
        var a = $("<a>")
        a.attr("href", "/guest/" + data[i].full_name);
        a.html(data[i].full_name);
        $(p).append(a);
        $(div).append(span, p);
        $("#time-era-fourteen").append(div);
        }

    })
})

$(document).on("click", "#alphabetical-fiveteen", function(event){
    event.preventDefault();

    $.ajax({
        method: "GET",
        url: "/alphabetical-fiveteen",
    }).done(function(data){
       $("#time-era-fiveteen").empty();


        for(var i = 0; i < data.length; i++){
        console.log(data[i].full_name.charAt(0))
        var div = $("<div id='history-template'>");
        var span = $("<span class='history-letter'>");
        var p = $("<p class='history-name'>")
        var a = $("<a>")
        a.attr("href", "/guest/" + data[i].full_name);
        a.html(data[i].full_name);
        $(p).append(a);
        $(div).append(span, p);
        $("#time-era-fiveteen").append(div);
        }

    })
})

$(document).on("click", "#alphabetical-sixteen", function(event){
    event.preventDefault();

    $.ajax({
        method: "GET",
        url: "/alphabetical-sixteen",
    }).done(function(data){
       $("#time-era-sixteen").empty();


        for(var i = 0; i < data.length; i++){
        console.log(data[i].full_name.charAt(0))
        var div = $("<div id='history-template'>");
        var span = $("<span class='history-letter'>");
        var p = $("<p class='history-name'>")
        var a = $("<a>")
        a.attr("href", "/guest/" + data[i].full_name);
        a.html(data[i].full_name);
        $(p).append(a);
        $(div).append(span, p);
        $("#time-era-sixteen").append(div);
        }

    })
})

$(document).on("click", "#alphabetical-seventeen", function(event){
    event.preventDefault();

    $.ajax({
        method: "GET",
        url: "/alphabetical-seventeen",
    }).done(function(data){
       $("#time-era-seventeen").empty();


        for(var i = 0; i < data.length; i++){
        console.log(data[i].full_name.charAt(0))
        var div = $("<div id='history-template'>");
        var span = $("<span class='history-letter'>");
        var p = $("<p class='history-name'>")
        var a = $("<a>")
        a.attr("href", "/guest/" + data[i].full_name);
        a.html(data[i].full_name);
        $(p).append(a);
        $(div).append(span, p);
        $("#time-era-seventeen").append(div);
        }

    })
})

$(document).on("click", "#alphabetical-eighteen", function(event){
    event.preventDefault();

    $.ajax({
        method: "GET",
        url: "/alphabetical-eighteen",
    }).done(function(data){
       $("#time-era-eighteen").empty();


        for(var i = 0; i < data.length; i++){
        console.log(data[i].full_name.charAt(0))
        var div = $("<div id='history-template'>");
        var span = $("<span class='history-letter'>");
        var p = $("<p class='history-name'>")
        var a = $("<a>")
        a.attr("href", "/guest/" + data[i].full_name);
        a.html(data[i].full_name);
        $(p).append(a);
        $(div).append(span, p);
        $("#time-era-eighteen").append(div);
        }

    })
})

$(document).on("click", "#alphabetical-nineteen", function(event){
    event.preventDefault();

    $.ajax({
        method: "GET",
        url: "/alphabetical-nineteen",
    }).done(function(data){
       $("#time-era-nineteen").empty();


        for(var i = 0; i < data.length; i++){
        console.log(data[i].full_name.charAt(0))
        var div = $("<div id='history-template'>");
        var span = $("<span class='history-letter'>");
        var p = $("<p class='history-name'>")
        var a = $("<a>")
        a.attr("href", "/guest/" + data[i].full_name);
        a.html(data[i].full_name);
        $(p).append(a);
        $(div).append(span, p);
        $("#time-era-nineteen").append(div);
        }

    })
})

$(document).on("click", "#alphabetical-twenty", function(event){
    event.preventDefault();

    $.ajax({
        method: "GET",
        url: "/alphabetical-twenty",
    }).done(function(data){
       $("#time-era-twenty").empty();


        for(var i = 0; i < data.length; i++){
        console.log(data[i].full_name.charAt(0))
        var div = $("<div id='history-template'>");
        var span = $("<span class='history-letter'>");
        var p = $("<p class='history-name'>")
        var a = $("<a>")
        a.attr("href", "/guest/" + data[i].full_name);
        a.html(data[i].full_name);
        $(p).append(a);
        $(div).append(span, p);
        $("#time-era-twenty").append(div);
        }

    })
})

$(document).on("click", "#alphabetical-twentyone", function(event){
    event.preventDefault();

    $.ajax({
        method: "GET",
        url: "/alphabetical-twentyone",
    }).done(function(data){
       $("#time-era-twentyone").empty();


        for(var i = 0; i < data.length; i++){
        console.log(data[i].full_name.charAt(0))
        var div = $("<div id='history-template'>");
        var span = $("<span class='history-letter'>");
        var p = $("<p class='history-name'>")
        var a = $("<a>")
        a.attr("href", "/guest/" + data[i].full_name);
        a.html(data[i].full_name);
        $(p).append(a);
        $(div).append(span, p);
        $("#time-era-twentyone").append(div);
        }

    })
})

$(document).on("click", "#alphabetical-twentytwo", function(event){
    event.preventDefault();

    $.ajax({
        method: "GET",
        url: "/alphabetical-twentytwo",
    }).done(function(data){
       $("#time-era-twentytwo").empty();


        for(var i = 0; i < data.length; i++){
        console.log(data[i].full_name.charAt(0))
        var div = $("<div id='history-template'>");
        var span = $("<span class='history-letter'>");
        var p = $("<p class='history-name'>")
        var a = $("<a>")
        a.attr("href", "/guest/" + data[i].full_name);
        a.html(data[i].full_name);
        $(p).append(a);
        $(div).append(span, p);
        $("#time-era-twentytwo").append(div);
        }

    })
})

$(document).on("click", "#alphabetical-twentythree", function(event){
    event.preventDefault();

    $.ajax({
        method: "GET",
        url: "/alphabetical-twentythree",
    }).done(function(data){
       $("#time-era-twentythree").empty();


        for(var i = 0; i < data.length; i++){
        console.log(data[i].full_name.charAt(0))
        var div = $("<div id='history-template'>");
        var span = $("<span class='history-letter'>");
        var p = $("<p class='history-name'>")
        var a = $("<a>")
        a.attr("href", "/guest/" + data[i].full_name);
        a.html(data[i].full_name);
        $(p).append(a);
        $(div).append(span, p);
        $("#time-era-twentythree").append(div);
        }

    })
})

$(document).on("click", "#alphabetical-twentyfour", function(event){
    event.preventDefault();

    $.ajax({
        method: "GET",
        url: "/alphabetical-twentyfour",
    }).done(function(data){
       $("#time-era-twentyfour").empty();


        for(var i = 0; i < data.length; i++){
        console.log(data[i].full_name.charAt(0))
        var div = $("<div id='history-template'>");
        var span = $("<span class='history-letter'>");
        var p = $("<p class='history-name'>")
        var a = $("<a>")
        a.attr("href", "/guest/" + data[i].full_name);
        a.html(data[i].full_name);
        $(p).append(a);
        $(div).append(span, p);
        $("#time-era-twentyfour").append(div);
        }

    })
})

$(document).on("click", "#alphabetical-twentyfive", function(event){
    event.preventDefault();

    $.ajax({
        method: "GET",
        url: "/alphabetical-twentyfive",
    }).done(function(data){
       $("#time-era-twentyfive").empty();


        for(var i = 0; i < data.length; i++){
        console.log(data[i].full_name.charAt(0))
        var div = $("<div id='history-template'>");
        var span = $("<span class='history-letter'>");
        var p = $("<p class='history-name'>")
        var a = $("<a>")
        a.attr("href", "/guest/" + data[i].full_name);
        a.html(data[i].full_name);
        $(p).append(a);
        $(div).append(span, p);
        $("#time-era-twentyfive").append(div);
        }

    })
})

$(document).on("click", "#alphabetical-twentysix", function(event){
    event.preventDefault();

    $.ajax({
        method: "GET",
        url: "/alphabetical-twentysix",
    }).done(function(data){
       $("#time-era-twentysix").empty();


        for(var i = 0; i < data.length; i++){
        console.log(data[i].full_name.charAt(0))
        var div = $("<div id='history-template'>");
        var span = $("<span class='history-letter'>");
        var p = $("<p class='history-name'>")
        var a = $("<a>")
        a.attr("href", "/guest/" + data[i].full_name);
        a.html(data[i].full_name);
        $(p).append(a);
        $(div).append(span, p);
        $("#time-era-twentysix").append(div);
        }

    })
})

$(document).on("click", "#alphabetical-twentyseven", function(event){
    event.preventDefault();

    $.ajax({
        method: "GET",
        url: "/alphabetical-twentyseven",
    }).done(function(data){
       $("#time-era-twentyseven").empty();


        for(var i = 0; i < data.length; i++){
        console.log(data[i].full_name.charAt(0))
        var div = $("<div id='history-template'>");
        var span = $("<span class='history-letter'>");
        var p = $("<p class='history-name'>")
        var a = $("<a>")
        a.attr("href", "/guest/" + data[i].full_name);
        a.html(data[i].full_name);
        $(p).append(a);
        $(div).append(span, p);
        $("#time-era-twentyseven").append(div);
        }

    })
})

$(document).on("click", "#alphabetical-twentyeight", function(event){
    event.preventDefault();

    $.ajax({
        method: "GET",
        url: "/alphabetical-twentyeight",
    }).done(function(data){
       $("#time-era-twentyeight").empty();


        for(var i = 0; i < data.length; i++){
        console.log(data[i].full_name.charAt(0))
        var div = $("<div id='history-template'>");
        var span = $("<span class='history-letter'>");
        var p = $("<p class='history-name'>")
        var a = $("<a>")
        a.attr("href", "/guest/" + data[i].full_name);
        a.html(data[i].full_name);
        $(p).append(a);
        $(div).append(span, p);
        $("#time-era-twentyeight").append(div);
        }

    })
})

$(document).on("click", "#alphabetical-twentynine", function(event){
    event.preventDefault();

    $.ajax({
        method: "GET",
        url: "/alphabetical-twentynine",
    }).done(function(data){
       $("#time-era-twentynine").empty();


        for(var i = 0; i < data.length; i++){
        console.log(data[i].full_name.charAt(0))
        var div = $("<div id='history-template'>");
        var span = $("<span class='history-letter'>");
        var p = $("<p class='history-name'>")
        var a = $("<a>")
        a.attr("href", "/guest/" + data[i].full_name);
        a.html(data[i].full_name);
        $(p).append(a);
        $(div).append(span, p);
        $("#time-era-twentynine").append(div);
        }

    })
})

$(document).on("click", "#alphabetical-thirty", function(event){
    event.preventDefault();

    $.ajax({
        method: "GET",
        url: "/alphabetical-thirty",
    }).done(function(data){
       $("#time-era-thirty").empty();


        for(var i = 0; i < data.length; i++){
        console.log(data[i].full_name.charAt(0))
        var div = $("<div id='history-template'>");
        var span = $("<span class='history-letter'>");
        var p = $("<p class='history-name'>")
        var a = $("<a>")
        a.attr("href", "/guest/" + data[i].full_name);
        a.html(data[i].full_name);
        $(p).append(a);
        $(div).append(span, p);
        $("#time-era-thirty").append(div);
        }

    })
})