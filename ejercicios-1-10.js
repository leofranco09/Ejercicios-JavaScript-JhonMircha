 /*1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4)
   devolverá "Hola".
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola 
    que tal', ' ') devolverá ['hola', 'que', 'tal'].
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
*/

// ejecicio 1
// a)
function miFuncion1(hola) {
  return hola.length;
}
console.log(miFuncion1("Hola Mundo"));// 10
// b)
function lengthCadena (text = "") {
  if (!text) {
    console.warn("No ingresaste Texto");
  }else {
    console.log(`El Texto ${text} tiene ${text.length} caracteres`);
  }
}
lengthCadena("Hola Mundo");
lengthCadena();


// Ejecicio 2
// A)
function miFuncion2(hola, n){
  let result = hola.slice(0, n);
  return result;
}
console.log(miFuncion2("Hola Mundo", 4));// Hola

// b)
 const recortarTexto = (letra, largo = 0) => {
  (!letra) 
  ? console.warn("No ingreasaste Palabras")
  : console.log(letra.slice(0, largo));
 }
 recortarTexto("Hola Mundo", 4);// hola

// Ejericicio 3
// a)
 function arrayFun(hola, space) {
  return hola.split(space);
 }
 console.log(arrayFun("hola que tal", " "));
 
 // b)
 const newArr = (hola, space = undefined) => 
 (!hola)
 ? console.warn("Ingresa texto")
 : (space === undefined)
  ? console.warn("No ingresaste el valor")
  : console.log(hola.split(space));

  newArr("hola que tal", " ");

  // Ejercicio 4
  // a)
  function repetirLeter(palabra, repetidor) {
    return palabra.repeat(repetidor);
  };
  console.log(repetirLeter("hola Mundo ", 3));
  // b) 
  const repeatPalabra = (cadena, repetidor) =>
  (!cadena)
    ? console.warn("Por favor Ingrese Palabras")
    : (!repetidor)
      ? console.warn("ingrese el numero que desee que se repita la palabra")
      : console.log(cadena.repeat(repetidor));
  repeatPalabra("hola Mundo ", 3);

  //c)
  function repetir(leter, numero) {
    for (let i = 1; i <= numero; i++) {
      console.info(leter, i);
    }
  };
  repetir("Hola Mundo ", 3);

  // d)
  const repetirPalabra = (palabra, veces = undefined) => {
    if(!palabra) return console.warn("ingrese Palabras");
    if(veces === undefined) return console.warn("ingrese un valor");
    if(veces ===  0) return console.warn("Por favor ingrese un numero mayor a 0");
    if(Math.sign(veces) === -1) return console.error("El numero no puede ser negativo");

    for(let i = 1; i <= veces; i++) console.info(palabra, i);
  }
  repetirPalabra("Hola a Todos ", 4);