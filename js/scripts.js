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

const ci_sarai = `
                <div id="ci_sarai">
                <form id="form" action="https://send.pageclip.co/ooqcLKV3xKOZTQzgvQxJ6aZJjKzJyPnB/invitati" class="pageclip-form" method="post">
                <h2 id="msg">Per aiutarci ad organizzare, facci sapere in anticipo se ci sarai.</h2>
                <div id="nome" class="format">
                <label for="fname" class="etichette">Nome *</label></br>
                <input name="nome" type="text" maxlength="100" class="input" required>
                </div>
                <div id="cognome" class="format">
                <label for="sname" class="etichette">Cognome *</label></br>
                <input name="cognome" type="text" maxlength="100" class="input" required>
                </div>
                <div id="nome-coppie" class="format">
                <label for="fname-coppie" class="etichette">Nome (partner)</label></br>
                <input name="nomepartner" type="text" maxlength="100" class="input">
                </div>
                <div id="cognome-coppie" class="format">
                <label for="sname-coppie" class="etichette">Cognome (partner)</label></br>
                <input name="cognomepartner" type="text" maxlength="100" class="input">
                </div>
                <div id="bambini" class="format">
                <label for="bambini" class="etichette">Quanti bambini vengono con te? *</label></br>
                <input name="bambini" type="number" min="0" class="input" required>
                </div>
                <div id="allergie" class="format">
                <label for="allergie" class="etichette">Hai qualche allergia/intolleranza?</label></br>
                <input name="allergie" type="text" maxlength="200" class="input">
                </div>
                <div id="notte" class="format">
                <div class="layout">
                <label for="notte" class="etichette">Ti fermerai a dormire?</label></br>
                <label class="switch">
                <input type="checkbox" name="notte" class="format">
                <span class="slider round"></span>
                </label>
                </div>
                <div class="layout">
                <label for="notte" class="etichette">Se sì, quanti sarete?</label></br>
                <input name="notte" type="number" min="0" class="input">
                </div>
                </div>
                <span>Ti aiuteremo a trovare una sistemazione :)</span>
                <div id="messaggio" class="format">
                <label for="messaggio" class="etichette">Messaggio</label></br>
                <input name="messaggio" type="text" maxlength="500" class="input">
                </div>
                <div id="invio" class="format">
                <button type="submit" class="pageclip-form__submit" id="button">
                <span>Invia</span>
                </button>
                </div>
                <span>* campi obbligatori.</span>
                </form>
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

$("#button").click(function(ev) {
            ev.preventDefault();
            $(".container").html("");
            return false;
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
            $(".container").append(ci_sarai);
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
