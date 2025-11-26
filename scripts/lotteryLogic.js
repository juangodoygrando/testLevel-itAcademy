// lógica de negocio



export function validacion(input) {
  
  if (isNaN(input)) {
    return false;
  } 
  if (input < 1 || input > 10) {
    return false;
  }

  return true;
}


