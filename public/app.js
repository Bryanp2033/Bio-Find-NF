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




