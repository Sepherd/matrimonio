/*****VAR*****/
let page_switch = 1;

const home = `
            <div id="home">
            <div id="day" class="time"></div>
            <div id="hour" class="time"></div>
            <div id="minute" class="time"></div>
            <div id="second" class="time"></div>
            </div>
            `;


/*****NAV*****/
page(page_switch);

$("li").click(function() {
    if (page_switch != $(this).val()) {
        $("li").removeClass("active");
        $(this).addClass("active");
        page_switch = $(this).val();
        $(".container").html("");
        page(page_switch);
    };
});

/*****PAGE*****/
function page(i) {
    switch (i) {
        case 1:
            $(".container").append(home);
            break;
        case 2:
            console.log("In costruzione");
            break;
        case 3:
            console.log("In costruzione");
            break;
        case 4:
            console.log("In costruzione");
            break;
        case 5:
            console.log("In costruzione");
            break;
        case 6:
            console.log("In costruzione");
            break;
        default:
            console.log("ERROR!");
    }
}

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