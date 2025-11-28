// manager
import { renderPlays, resertResultDiv, checked } from "./scripts/lotteryUi.js";

const buttonFindOut = document.getElementById("buttonFindOut");
const buttonViewHistory = document.getElementById("viewHistory");

buttonFindOut.addEventListener("click", () => {
  try {
    resertResultDiv();
    const inputNumber = parseFloat(
      document.getElementById("inputNumber").value
    );
    checked(inputNumber);
  } catch (error) {
    console.error("An unexpected error occurred:", error);
  }
});

buttonViewHistory.addEventListener("click", () => {
  try {
    renderPlays();
  } catch (error) {
    console.error("An unexpected error occurred:", error);
  }
});
