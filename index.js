// manager
import { inputError, win, lost, renderPlays } from "./scripts/lotteryUi.js";
import {
  validation,
  numRandom,
  checkWin,
  generatePlayHistoryHTML,
} from "./scripts/lotteryLogic.js";

const buttonFindOut = document.getElementById("buttonFindOut");

buttonFindOut.addEventListener("click", () => {
  try {
    const inputNumber = parseFloat(
      document.getElementById("inputNumber").value
    );

    if (!validation(inputNumber)) {
      inputError();
      return;
    }

    if (checkWin(numRandom(), inputNumber)) {
      win();
      renderPlays(generatePlayHistoryHTML());
    } else {
      lost();
      renderPlays(generatePlayHistoryHTML());
    }
  } catch (error) {
    console.error("An unexpected error occurred:", error);
  }
});
