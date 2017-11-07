$(document).one("click", "#button-one", function(event){
    event.preventDefault();
    
    $.ajax({
        method: "GET",
        url: "/eraone",
    }).done(function(data) {
        
        for(var i = 0; i < data.length; i++){
            console.log(data[i].full_name)
            var div = $("<div id='history-name'>");
            div.html(data[i].full_name);
            $("#time-era-one").append(div);
        }

        // console.log(data);
        // var div = $("<div class='history-name'>")
    });

})