// Lógica de la UI
import { jugadas } from "./lotteryLogic.js";

export function inputError() {
  alert("You must enter only one number from 1 to 10");
}

export function win() {
  Swal.fire({
    title: `${jugadas[jugadas.length-1].message}`,
    
    icon: "success",
  });
}
export function lost() {
  Swal.fire({
    title: `${jugadas[jugadas.length-1].message}`,
    text: `Numero Random: ${jugadas[jugadas.length-1].data.randomNumber}`,
    icon: "error"
  });
}
