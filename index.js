// manager
import { inputError, win,lost } from "./scripts/lotteryUi.js";
import { validacion,numRandom,comparison,jugadas,printJugada} from "./scripts/lotteryLogic.js";

const buttonFindOut = document.getElementById("buttonFindOut");


buttonFindOut.addEventListener("click", () => {

const numeroIngresado = document.getElementById("inputNumber").value;

  console.log(numeroIngresado);
  if (!validacion(numeroIngresado)) {
    inputError();
    return;
  }
  console.log(jugadas)

  if(comparison(numRandom(),parseFloat(numeroIngresado))){
    console.log(jugadas)
    win()
    printJugada()
  }else{
    lost()
    printJugada()
  }
});
