// lógica de negocio
export let jugadas = [];

export function validacion(input) {
  if (isNaN(input)) {
    return false;
  }
  if (input < 1 || input > 10) {
    return false;
  }

  return true;
}

export function numRandom() {
  let numRandom = Math.floor(Math.random() * 10) + 1;
  return numRandom;
}

export function comparison(numAleatorio, numIngresado) {
  if (numAleatorio === numIngresado) {
    jugadas.push({
      message: "Win",
      data: {
        userNumber: numIngresado,
        randomNumber: numAleatorio,
      },
    });
    return true;
  } else {
    jugadas.push({
      message: "Lost",
      data: {
        userNumber: numIngresado,
        randomNumber: numAleatorio,
      },
    });
    return false;
  }
}

export function printJugada() {
  let divElement = document.getElementById("result");

  let listaJugadas = "";

  for (let juego of jugadas) {
    listaJugadas += `<br>Jugada ${juego.message} Numero Random: ${juego.data.randomNumber} Numero Ingresado: ${juego.data.userNumber}<br>`;
    
  }

  console.log(listaJugadas);

  divElement.innerHTML = listaJugadas;
}
