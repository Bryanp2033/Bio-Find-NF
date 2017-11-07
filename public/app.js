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
