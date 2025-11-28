// Lógica de la UI
import { gameHistory } from "./gameHistory.js";
import { lottery } from "./lotteryLogic.js";

export function inputError() {
  alert("You must enter only one number from 1 to 10");
}

export function win() {
  Swal.fire({
    title: `${gameHistory[gameHistory.length - 1].message}`,
    text: `Your number matches, you won!`,
    icon: "success",
  });
}
export function lost() {
  Swal.fire({
    title: `${gameHistory[gameHistory.length - 1].message}`,
    text: `Random number: ${
      gameHistory[gameHistory.length - 1].data.randomNumber
    }`,
    icon: "error",
  });
}

let playContainer = document.getElementById("result");

export function renderPlays() {
  let playHistory = "";
  let counter = 1;

  for (let game of gameHistory) {
    playHistory += `<br>Game Nº ${counter++} <strong>${game.message.toUpperCase()}</strong>  Random number:${
      game.data.randomNumber
    } User number: ${game.data.userNumber}<br>`;
  }

  playContainer.innerHTML = playHistory;
}

export function resertResultDiv() {
  playContainer.innerHTML = "";
}

export function checked(userInput) {
  const result = lottery(userInput);

  if (result.message === "error") {
    inputError();
    return;
  }

  if (result.message === "Win") {
    win();
  } else {
    lost();
  }
}
