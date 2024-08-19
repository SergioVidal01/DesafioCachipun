 // Esta es la función para que juegue la máquina.
 function generaJugadaMaquina() {
    const opciones = ["Piedra", "Papel", "Tijera"];
    const indice = Math.floor(Math.random() * 3); // aquí gneramos el número random.
    return opciones[indice];
}

// Aquí se define quien es el ganador usando condicionales, sabiendo que si son igual es un empate
function determinarGanador(jugadaPlayer, jugadaMaquina) {
    if (jugadaPlayer === jugadaMaquina) {
        return "Empate";
    }
    if (
        (jugadaPlayer === "Piedra" && jugadaMaquina === "Tijera") ||
        (jugadaPlayer === "Papel" && jugadaMaquina === "Piedra") ||
        (jugadaPlayer === "Tijera" && jugadaMaquina === "Papel")
    ) {
        return "Player";
    }
    return "Maquina";
}

 // Desenlace del juego, resultado y mensaje final.
 function jugarCachipun(jugadaPlayer) {
    const jugadaMaquina = generaJugadaMaquina();
    const ganador = determinarGanador(jugadaPlayer, jugadaMaquina);

    let mensaje = `Tú elegiste: ${jugadaPlayer} | Computadora eligió: ${jugadaMaquina}. `;

    if (ganador === "Empate") {
        mensaje += "Es un empate.";
    } else if (ganador === "Player") {
        mensaje += "¡Felicidades! Has ganado." ;
    } else {
        mensaje += "Lo siento, la computadora ha ganado.";
    }

    document.getElementById("resultado").innerText = mensaje;
}

