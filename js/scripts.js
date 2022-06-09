/*****COUNTDOWN*****/
let marriageDate = new Date("Oct 8, 2022 11:00:00").getTime();
let countdown = setInterval(function() {
    let now = new Date().getTime();
    let distance = marriageDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
    let seconds = Math.floor(distance % (1000 * 60) / 1000);
    
    document.getElementById("day").innerHTML = days + " d";
    document.getElementById("hour").innerHTML = hours + " h";
    document.getElementById("minute").innerHTML = minutes + " m";
    document.getElementById("second").innerHTML = seconds + " s";
}, 1000);