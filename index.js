// manager
import { inputError, win } from "./scripts/lotteryUi.js";
import { validacion,comparison} from "./scripts/lotteryLogic.js";

const buttonFindOut = document.getElementById("buttonFindOut");
const numeroIngresado = document.getElementById("inputNumber").value;

buttonFindOut.addEventListener("click", () => {
  console.log(numeroIngresado);
  if (!validacion(numeroIngresado)) {
    inputError();
    return;
  }

  if(comparison(numRandom(),numeroIngresado)){
    win()
    printJugada()
  }else{
    lost()
    printJugada()
  }
});
