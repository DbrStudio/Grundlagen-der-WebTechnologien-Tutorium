// BITTE MACHT DAS NIE MALS IM ECHTEN LEBEN SO!
// Das ist die schlechteste Art, um Passwörter zu speichern.
// Wir machen das hier nur, weil wir noch keine Datenbank haben.
// In einer echten Anwendung würden wir das Passwort niemals im Klartext speichern.
// Wir würden es hashen und salten und dann den Hash speichern. -> Siehe Systemadminstration Vorlesung oder https://de.wikipedia.org/wiki/Salt_(Kryptologie)
const USERPASS = {
    name: 'admin',
    pass: 'password'
};

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === USERPASS.name && password === USERPASS.pass) {
        // Wir verwenden hier window.location.href, um die Seite zu wechseln.
        // Das ist nicht die beste Methode, um eine Single-Page-Application zu bauen.
        // Aber für unsere Zwecke reicht es.
        window.location.href = "rechenaufgabe.html";
    } else {
        alert("Login fehlgeschlagen!");
    }
}

function getResults(){
    console.log("getting results:");
    var results = [];
    for (var i = 1; i <= 5; i++) {
        // Wir verwenden hier String-Concatenation, um den Wert des Inputs zu bekommen.
        // Da wir die IDs der Inputs nach dem Schema "result-1" bis "result-5" benannt haben, können wir das so machen.
        var result = document.getElementById("result-" + i).value;
        results.push(result);
    }
    console.log(results);
    return results;
};

function checkResults(res){
    console.log("checking results:");
    var score = 0;
    // Da alle Aufgaben 30 ergeben, wird nur auf 30 geprüft. Think smarter, not harder.
    for (var i = 0; i < res.length; i++) {
        if (res[i] == 30) {
            console.log("result " + i + " is correct");
            score++;
        }
    }
    console.log("score: " + score);
    return score;
}


function result(){
    var results = getResults();
    var score = checkResults(results);
    switch (score) {
        // Ich wusste gar nicht, dass dieser Syntax möglich ist. Finden wir super!
        case 0:
        case 1:
            alert("Note: 6, Setzen!");
            break;
        case 2:
        case 3:
            alert("Note: 5, Setzen!");
            break;
        case 4:
            alert("Note: 2!");
            break;
        case 5:
            alert("Note: 1!");
            break;
    }
}