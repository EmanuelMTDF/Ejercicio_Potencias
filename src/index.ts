// EJERCICIO "POTENCIA"

let base: number = Number(
  prompt("Por favor, ingrese la BASE de su cálculo de potencia")
);
let exponente: number = Number(
  prompt("Por favor, ingrese el EXPONENTE de su cálculo de potencia")
);

function potencia(base: number, exponente: number): number {
  while (exponente >= 0) {
    return base ** exponente;
  }
  if (exponente === 0) {
    return 1;
  } else (exponente < 0) {
      alert("El exponente NO debe ser menor a 0. Por favor, intente nuevamente");
      console. log("El exponente NO debe ser menor a 0. Por favor, intente nuevamente");
  }
}

console.log(potencia(base, exponente));
