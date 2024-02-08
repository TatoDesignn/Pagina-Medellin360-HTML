var routes = document.getElementById("routes");
var saved = document.getElementById("saved");
var discover = document.getElementById("discover");
var events = document.getElementById("events");
var around = document.getElementById("around");
var upcoming = document.getElementById("upcoming");

routes.addEventListener("click", function(){
    window.location.href = "../html/agenda2.html";
});

saved.addEventListener("click", function(){
    window.location.href = "../html/agenda3.html";
});

discover.addEventListener("click", function(){
    window.location.href = "../html/agenda4.html";
});

events.addEventListener("click", function(){
    window.location.href = "../html/agenda5.html";
});

around.addEventListener("click", function(){
    window.location.href = "../html/agenda6.html";
});

upcoming.addEventListener("click", function(){
    window.location.href = "../html/agenda7.html";
});