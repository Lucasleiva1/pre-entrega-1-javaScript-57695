function juegoPiedraPapelTijera() {
    const opciones = ["piedra", "papel", "tijera"];
    const eleccionUsuario = prompt("Elige piedra, papel o tijera:").toLowerCase();
    const eleccionComputadora = opciones[Math.floor(Math.random() * 3)];

    if (eleccionUsuario === eleccionComputadora) {
        alert("Empate. Ambos eligieron lo mismo.");
    } else if (
        (eleccionUsuario === "piedra" && eleccionComputadora === "tijera") ||
        (eleccionUsuario === "papel" && eleccionComputadora === "piedra") ||
        (eleccionUsuario === "tijera" && eleccionComputadora === "papel")
    ) {
        alert("¡Ganaste!");
    } else {
        alert("La computadora gana.");
    }
}

juegoPiedraPapelTijera();