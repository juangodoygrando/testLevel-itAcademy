// manager
import {
  inputError,
  win,
  lost,
  renderPlays,
  resertResultDiv,
} from "./scripts/lotteryUi.js";
import {
  validation,
  numRandom,
  checkWin,
  generatePlayHistoryHTML,
} from "./scripts/lotteryLogic.js";

const buttonFindOut = document.getElementById("buttonFindOut");

buttonFindOut.addEventListener("click", () => {
  try {
    resertResultDiv();
    const inputNumber = parseFloat(
      document.getElementById("inputNumber").value
    );

    if (!validation(inputNumber)) {
      inputError();
      return;
    }

    if (checkWin(numRandom(), inputNumber)) {
      win();
    } else {
      lost();
    }
  } catch (error) {
    console.error("An unexpected error occurred:", error);
  }
});

const buttonViewHistory = document.getElementById("viewHistory");

buttonViewHistory.addEventListener("click", () => {
  try {
    renderPlays(generatePlayHistoryHTML());
  } catch (error) {
    console.error("An unexpected error occurred:", error);
  }
});
