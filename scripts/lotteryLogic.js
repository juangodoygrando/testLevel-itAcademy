// lógica de negocio
let jugadas = [];

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
      message: "win",
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
