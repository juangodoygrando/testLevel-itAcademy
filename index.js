// manager
import { renderPlays, resertResultDiv } from "./scripts/lotteryUi.js";
import { generatePlayHistoryHTML,lottery } from "./scripts/lotteryLogic.js";

const buttonFindOut = document.getElementById("buttonFindOut");

buttonFindOut.addEventListener("click", () => {
  try {
    resertResultDiv();
    const inputNumber = parseFloat(
      document.getElementById("inputNumber").value
    );
    lottery(inputNumber);
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
