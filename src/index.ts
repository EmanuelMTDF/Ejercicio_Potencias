// EJERCICIO "POTENCIA"

/*
• Realice un programa que devuelva la potencia de un número.
• La base y el exponente deben ser ingresados por teclado.
• Sólo deben admitirse exponentes mayores o iguales a cero.
• Recuerde que el resultado de un numero elevado a 0 es 1.
• Separe la lógica de calcular la potencia utilizando métodos.
*/

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
