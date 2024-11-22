
function alertA() {
    let a = 1;
    alert(a + " ist vom Typ " + typeof a);
}

function alertB() {
    let b = "Hallo";
    alert(b + " ist vom Typ " + typeof b);
}

function alertC() {
    let c = true;
    alert(c + " ist vom Typ " + typeof c);
}

function aufgabe1b() {
    let wert1 = prompt("Bitte geben Sie den ersten Wert ein:");
    let wert2 = prompt("Bitte geben Sie den zweiten Wert ein:");

    let zahl1 = parseFloat(wert1);
    let zahl2 = parseFloat(wert2);

    let result = zahl1 * zahl2;
    // Das hier ist wie Schneider es eigentlich haben wollte, aber diese Lösung gefällt mir einfach überhaupt nicht:
    // document.write("Das Ergebnis der Multiplikation ist: " + result);
    // Diese Funktion überschreibt den ganzen Inhalt der Seite, was nicht wirklich super ist.
    // Stattdessen schreiben wir das Ergebnis in das Element mit der ID "result". Eine DIV btw.
    document.getElementById("result").innerHTML = "Ergebnis: " + result;
}