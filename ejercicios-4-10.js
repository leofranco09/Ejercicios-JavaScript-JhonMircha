/*12) Programa una función que determine si un número es primo 
(aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.*/
// a) 
function primo(numero) {
  if(numero === 0 || numero === 1)return console.warn(`El numero ingresado ${numero} no es un primo`);
  if(Math.sign(numero) === -1) return console.warn("ingrese numero mayores que 1");

  for(let i = 2; i < Math.sqrt(numero); i++){
    if(numero % i === 0) return console.log(`el valor ${numero} no es numero primo`);
  }
  return console.log(`el valor ${numero} es un numero primo`);
}
primo(13);

// b) 
const esPrimo = (numero) => {
  let divisible = false;
  for(let i = 2; i < numero; i++){
    if(numero % i !== 0) {
      divisible = true;
      break
    }
  }
  return divisible;
}
console.log(esPrimo(13));

/*13) Programa una función que determine si un número es par o impar, pe. miFuncion(29)
 devolverá Impar.*/
// a)
const par = (numero) => numero % 2 === 0 ? console.log("es Par") : console.warn("es Impar");

par(29);

/*14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa,
 pe. miFuncion(0,"C") devolverá 32°F.*/

 // a)
 function conversorGrados(temp, grados) {
  grados = grados.toLowerCase();
  if(typeof temp !== "number") return console.log("ingrese numeros");

  if(grados === "c") {
    let fahrenheit = (temp * 9 / 5) + 32;
    return console.log(`La conversion del ${temp}${grados} (Celsius) a Fahrenhei es ${fahrenheit} F°`);
    } else if(grados === "f") {
      let celsius = (temp - 32) * 9 / 5;
      return console.log(`La conversio del ${temp}${grados} (Fahrenheit) a Celsius es ${celsius} C°`);
    }else {
      console.log("Ingrese Celsius (C) o Fahrenheit (F)");
    }
  
 }
 conversorGrados(10,"c");

 // b) 
 const convertirGrado = (numero, grado) => {
  grado = grado.toLowerCase();
  if(typeof numero !== "number") return console.warn("ingrese numeros");
  if(typeof grado !== "string") return console.warn("ingrese F o C");
  if(grado.length !== 1 || !/(c|f)/.test(grado)) return console.warn("Valor de grado desconocido");

  if(grado === "c") {
    return console.log(`${numero}°C = ${Math.round((numero * 9 / 5) + 32)}°F`);
  }else {
    return console.log(`${numero}°F = ${Math.round((numero - 32) * 9 / 5)}°C`);
  }
 }

 convertirGrado(32, "f");