/*9) Programa una función que obtenga un numero aleatorio entre 501 y 600.*/
// a)
function numeroAleatorio(inicio = "", limite = "") {
  if(!inicio) return console.warn("ingrese numero inicial");
  if(!limite) return console.warn("ingrese el numero de limite");
  let aleatorio = Math.random();
  let resultado = Math.floor(aleatorio * (limite - inicio + 1) + inicio);
  return resultado;
}
console.log(numeroAleatorio(501, 600));

// b)
const aleatorio = () => Math.round(Math.random() * 100 + 1) + 500;
console.log(aleatorio());

/*10) Programa una función que reciba un número y evalúe si es capicúa o no 
(que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.*/

function capicua(numero = "") {
if(!numero) return console.warn("Por favor ingrese un numero");

let convertir = String(numero);
let resultado = convertir.split("").reverse().join("");
if(numero === Number(resultado)) return true;
return false;
}
console.log(capicua(2002));

// B)
const reverseNumber = (numero = 0) => {
if(!numero) return console.warn("ingrese numero");
if(typeof numero !== "number") return console.error(`El valor ingresado ${numero} no es un numero`);

numero = numero.toString();
let darVuelta = numero.split("").reverse().join("");
return (parseInt(numero) === parseInt(darVuelta))
? console.info(`El ${numero} ingresado es capicua de ${darVuelta} `)
: console.warn(`El valor ingresado ${numero} no es capicua de ${darVuelta}`);
}
reverseNumber(4004);
/*11) Programa una función que calcule el factorial de un número (El factorial de
 un entero positivo n, se define como el producto de todos los números enteros 
 positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120. */

 // a)
 function factorial(numero) {
  let resultado = 1;

  for(let i = 1; i <= numero; i++){
    resultado *= i;
  }
  return resultado;
 }
 console.log(factorial(5)); // 120

 // b) 
 function recursiva(numero) {
  if(numero === 0 || numero === 1) {
    return 1;
  }else {
    return numero * recursiva(numero - 1);
  }
 }
 console.log(recursiva(5)); // 120

 // c) 
 const factorial1 = (numero = undefined) => {
  if(numero === undefined) return console.warn("No ingresaste numero");
  if(numero === 0) return console.warn("El numero ingresado no puede ser 1");
  if(typeof numero !== "number") return console.warn(`El valor ingresado no es numero`);
  if(Math.sign(numero) === -1) return console.warn("por no ingrese numeros negativos");

  let factorial = 1;
  for(let i = numero; i > 1; i--) {
      factorial *= i;
  }
  return console.log(`El factorial de ${numero} es ${factorial}`);
 }

 factorial1(5);// 120