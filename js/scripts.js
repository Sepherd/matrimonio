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

const come_arrivare = `
                    <div id="come_arrivare">
                    <h2>Sabato 8 Ottobre</h2>
                    <div class="cerimonia">
                    <div class="event">
                    <p>La Cerimonia si svolgerà presso il Comune di Ceprano a partire dalle ore 11:30</p>
                    </div>
                    <div class="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d764429.3835028849!2d12.954975703866097!3d41.54646527924996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13254cddc429f46b%3A0xc5e167f56d34ee5e!2sComune%20Di%20Ceprano!5e0!3m2!1sit!2sit!4v1657101167202!5m2!1sit!2sit" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    </div>
                    <div class="cerimonia">
                    <div class="event">
                    <p>Il Ricevimento avrà luogo, a seguire, presso Villa Ferrari - Ceprano</p>
                    </div>
                    <div class="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d764303.1050132293!2d12.93557840386645!3d41.55714477924902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13254c5595786839%3A0x5acdfcb4be4daa25!2sVilla%20Ferrari!5e0!3m2!1sit!2sit!4v1657102156225!5m2!1sit!2sit" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    </div>
                    </div>

`;

const ci_sarai = `
                <div id="ci_sarai">
                <form id="form" target="fake_page" action="https://send.pageclip.co/ooqcLKV3xKOZTQzgvQxJ6aZJjKzJyPnB/invitati" class="pageclip-form" method="post" onsubmit="message(this)">
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
                <input name="nome-coppie" type="text" maxlength="100" class="input">
                </div>
                <div id="cognome-coppie" class="format">
                <label for="sname-coppie" class="etichette">Cognome (partner)</label></br>
                <input name="cognome-coppie" type="text" maxlength="100" class="input">
                </div>
                <div id="bambini" class="format">
                <label for="bambini" class="etichette">Quanti bambini vengono con te?</label></br>
                <input name="bambini" type="number" min="0" value="0" class="input">
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
                <button class="pageclip-form__submit" id="button">Invia</button>
                </div>
                <iframe name="fake_page" id="redirect"></iframe>
                <span> * campi obbligatori.</span>
                </form>
                </div>
                `;

const thanks = `
            <div id="thanks">
            <p>Grazie!</p>
            </div>
`;

const lista_nozze = `
                <div id="lista_nozze">
                <h2>Grazie</h2>
                <p>a chi vorrà contribuire a realizzare tutti i nostri progetti</p>
                <p>IBAN: IT96L020080520400421371651</p>
                <p>Intestato a Moro Riccardo e Palleschi Maria Paola</p>
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
            $(".container").append(come_arrivare);
            break;
        case 3:
            $(".container").append(ci_sarai);
            break;
        case 4:
            console.log("In costruzione");
            break;
        case 5:
            $(".container").append(lista_nozze);
            break;
        case 6:
            console.log("In costruzione");
            break;
        default:
            console.log("ERROR!");
    }
}

/*****FORM*****/
function message(form) {
    setTimeout(function () {
        // $(".container").html("");
        // $(".container").append(thanks);
        alert("Dati inviati.\nGrazie!");
    }, 1000);
}

/*****COUNTDOWN*****/
let marriageDate = new Date("Oct 8, 2022 11:30:00").getTime();
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
