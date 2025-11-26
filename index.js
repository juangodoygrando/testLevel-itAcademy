// manager
import {inputError} from './scripts/lotteryUi.js'
import {validacion} from './scripts/lotteryLogic.js'

const buttonFindOut=document.getElementById('buttonFindOut')
const numeroIngresado = document.getElementById('inputNumber').value

buttonFindOut.addEventListener('click',()=>{
    console.log(numeroIngresado)
    if(!validacion(numeroIngresado)){
    inputError()
    return
}
})

