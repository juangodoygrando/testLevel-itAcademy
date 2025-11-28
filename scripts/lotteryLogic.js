// lógica de negocio

import { gameHistory } from "./gameHistory.js";

export function validation(input) {
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

export function checkWin(randomNumber, userNumber) {
  if (randomNumber === userNumber) {
    gameHistory.push({
      message: "Win",
      data: {
        userNumber: userNumber,
        randomNumber: randomNumber,
      },
    });
    return true;
  } else {
    gameHistory.push({
      message: "lost",
      data: {
        userNumber: userNumber,
        randomNumber: randomNumber,
      },
    });
    return false;
  }
}

export function lottery(userNumber, randomNumber = numRandom()) {
  if (!validation(userNumber)) {
    return { message: "error" };
  }

  const win = checkWin(randomNumber, userNumber);

  return {
    message: win ? "Win" : "Lost",
    data: { userNumber, randomNumber },
  };
}
