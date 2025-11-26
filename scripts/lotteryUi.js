// Lógica de la UI
import { gameHistory, generatePlayHistoryHTML } from "./lotteryLogic.js";

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
export function renderPlays(generatePlayHistoryHTML) {
  let playContainer = document.getElementById("result");

  playContainer.innerHTML = generatePlayHistoryHTML;
}
