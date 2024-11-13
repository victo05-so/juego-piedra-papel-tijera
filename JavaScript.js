var jugador1 = prompt("Piedra/Papel/Tijeras");
var jugador2 = prompt("Piedra/Papel/Tijeras");

if ( (jugador1 === "Piedra" && jugador2 === "Tijeras") || 
(jugador1 === "Papel" && jugador2 === "Piedra") || 
(jugador1 === "Tijeras" && jugador2 === "Papel")){
alert ("Jugador 1 gana");
}

if ( (jugador2 === "Piedra" && jugador1 === "Tijeras") || 
(jugador2 === "Papel" && jugador1 === "Piedra") || 
(jugador2 === "Tijeras" && jugador1 === "Papel")){
alert ("Jugador 2 gana");
}

if ( ( ( jugador1 === "Piedra") === (jugador2 === "Piedra")) ||
    ((jugador1 === "Papel") === (jugador2 === "Papel")) || 
    ((jugador1 === "Tijera") === (jugador2 === "Tijera"))) {
        alert ("Empate");
        }


else {
    alert ("Refresca la página");
}




