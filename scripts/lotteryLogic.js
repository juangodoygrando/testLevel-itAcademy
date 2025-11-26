// lógica de negocio
export let gameHistory = [];

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
      message: "win",
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

export function generatePlayHistoryHTML() {
  let playHistory = "";
  let counter = 1;

  for (let game of gameHistory) {
    playHistory += `<br>Game Nº ${counter++} <strong>${game.message.toUpperCase()}</strong>  Random number:${
      game.data.randomNumber
    } User number: ${game.data.userNumber}<br>`;
  }

  return playHistory;
}
