const quizTresc = {
    tresc: [
        "W jakiej miejscowości mieszka Henryk?",
        "Jak ma na nazwisko Henryk?",
        "Jakie jest ulubione zwierze Henryka?",
        "Gdzie mieszka Henryk?",
        "PODAJ SEKRETNE HASLO HENRYKA"
    ],
    odpowiedz: [
        '<form><b>A</b><input type="radio" name="pytanie" value="0">Żyrzyn<br><b>B</b><input type="radio" name="pytanie" value="1">Kurów<br><b>C</b><input type="radio" name="pytanie" value="2">Borysów<br></form><button onclick="sprawdzOdp(0)">Dalej</button>',
        '<form><b>A</b><input type="radio" name="pytanie" value="0">Rodzoch<br><b>B</b><input type="radio" name="pytanie" value="1">Rodzyn<br><b>C</b><input type="radio" name="pytanie" value="2">Rydzyk<br></form><button onclick="sprawdzOdp(1);">Dalej</button>',
        '<form><b>A</b><input type="radio" name="pytanie" value="0">Koza<br><b>B</b><input type="radio" name="pytanie" value="1">Pies<br><b>C</b><input type="radio" name="pytanie" value="2">Krowa<br></form><button onclick="sprawdzOdp(2);">Dalej</button>',
        '<form><b>A</b><input type="radio" name="pytanie" value="0">W lesie<br><b>B</b><input type="radio" name="pytanie" value="1">Obok sklepu<br><b>C</b><input type="radio" name="pytanie" value="2">Obok remizy<br></form><button onclick="sprawdzOdp(3);">Dalej</button>',
        '<input type="text" id="pytanie4"><button onclick="sprawdzOdp(4);">Dalej</button>'
    ],
    poprawne: [2, 0, 2, 1, "kochamKr0wy321"]
}
const opisy = [
    "To zdjęcie przedstawia Henryka, ubranego w biało-niebiesko-czarną kratkowaną koszulę, z poważną miną twarzy, prawdopodobnie podczas robienia zdjęcia siedział w swoim domu. Za Henrykiem można zauważyć białe firanki, pomarańczowe kurtyny i okno za którym widnieje noc.",
    "Na tym zdjęciu możemy zauważyc Heńka patrzącego się w dal. Najprawdopodobniej rozmyśla o swoich grzechach. Na głowie ma wojskową czapke co może sugerować, że Henryk był kiedyś Polskim żołnierzem.",
    "Ta fotografia przedstawia Henrego który wydaje się być zawstydzony. W tle zdjęcia można zauważyć stary zniszczony budynek oraz wyschnięte drzewo. Powodem nieśmiałości Henryka może być to, że osoba przeprowadzająca z nim wywiad, odczytuje jego sprośne prywatne wiadomości.",
    "W tym obrazie, Henryk już zaakceptował swój los, nie próbuje uciekać, krzyczeć lub kłócić się. Zrozumiał swoje błędy i żałuje za grzechy. Cierpliwie czeka na policję która ukarze go za jege haniebne czyny."
]

document.getElementById("select1").onchange = album;

function album(){
    let id = document.getElementById("select1").value;
    let zdj = "url(files/" + id + ".png)";

    document.getElementById("zdjecie").style.backgroundImage = zdj;
    document.getElementById("opis").innerHTML = opisy[id];
}

let easteregg = 0;
let checkEE = false;
let check = false;

function animacja() {
    setTimeout(function(){
    document.getElementById("zdjecieWiezienie").style.transform = "rotateX(45deg)";
    }, 500)
    document.getElementById("zdjecieWiezienie").style.transform = "rotateX(0deg)";
}
animacja();
setInterval(animacja, 1000);

document.getElementById("zdjecieWiezienie").onclick = function(){
        if(check == false){
                document.getElementById("zdjecieWiezienie").style.backgroundImage = "url(files/heniohappy.png)";
            check = true;
            if(easteregg == 5){
                document.getElementById("dialog").style.fontSize = "15px";
                document.getElementById("dialog").innerHTML = "01101011 01101111 01100011 01101000 01100001 01101101 01001011 01110010 00110000 01110111 01111001 00110011 00110010 00110001";
            }else{
                document.getElementById("dialog").innerHTML = "Dziękuje! :D";
            }
            easteregg++;
            console.log(easteregg)

            setTimeout(function(){
                document.getElementById("zdjecieWiezienie").style.backgroundImage = "url(files/0.png)";
                document.getElementById("dialog").innerHTML = "Witaj w mojej celi!<br><small>(Kliknij na mnie)</small>";
                document.getElementById("dialog").style.fontSize = "30px";
                check = false;
            }, 5000);
        }
    }

function quizDalej(n){
    document.getElementById("quiz").innerHTML = '<h1>SUPER QUIZ!</h1><div id="pytanie" class="mediumText marginLeft"><b>Pytanie :</b></div><div id="tresc" class="smallText marginLeft"></div><div id="quizZdjecie" class="center"></div><div id="odpowiedz" class="smallText marginLeft"><form><b>A</b><input type="radio" name="pytanie" value="0"><br><b>B</b><input type="radio" name="pytanie" value="1"><br><b>C</b><input type="radio" name="pytanie" value="2"><br></form><button onclick="sprawdzOdp(0);">Dalej</button></div>'
    document.getElementById("pytanie").innerHTML = "<b>Pytanie " + (n+1) + ":</b>";
    document.getElementById("tresc").innerHTML = quizTresc.tresc[n];
    document.getElementById("quizZdjecie").style.backgroundImage = "url(files/quiz" + n + ".png)";
    document.getElementById("odpowiedz").innerHTML = quizTresc.odpowiedz[n];
}

function quizZle(){
    document.getElementById("quiz").innerHTML = '<div id="quizZle" class="centerText">ŹLE!!! <br><button id="restart" onclick="quizDalej(0);">RESTART</button></div>';
}

function quizKoniec(){
    document.getElementById("quiz").innerHTML = '<div id="quizKoniec" class="centerText">WYGRAŁEŚ!!! <br><div class="smallText centerText"><b>Oto twoja nagroda</b></div><audio controls src="files/muzyka.mp3" id="muzyka"></audio></div>';
}

function odpowiedz() { 
    var checkRadio = document.querySelector(
        'input[name="pytanie"]:checked');
    
    if(checkRadio != null) {
        return checkRadio.value;
    }
    else {
        return 3;
    }
}

function sprawdzOdp(number){
    if(number == 4){
        let odp = document.getElementById("pytanie4").value;
        if(odp == quizTresc.poprawne[4]){
            quizKoniec();
        }else{
            quizZle();
        }
        }else{
        let odp = odpowiedz(number);
        if(odp == quizTresc.poprawne[number]){
            quizDalej(number+1);
        }else{
            quizZle();
        }
    }
}

album();