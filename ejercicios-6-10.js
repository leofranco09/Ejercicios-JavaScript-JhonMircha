/*18) Programa una función que dada una cadena de texto cuente el número de vocales y 
consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.*/

// a)
function contarLetras(text) {
  text = text.toLowerCase();
  let vocales = /[aeiou]/;
  let consonantes = /[bcdfghjklmnñpqrstvwxyz]/;

  let contadorVocal = 0;
  let contadorConsonante = 0;
  for(let i = 0; i < text.length; i++){
    let contar = text.charAt(i);
    if(vocales.test(contar)) {
      contadorVocal++;
    }else if (consonantes.test(contar)){
      contadorConsonante++;
    }
  }
  console.log(`tienes un total de ${contadorConsonante} consonantes`)
  console.log(`tienes un total de ${contadorVocal} vocales`)
}
contarLetras("Hola Mundo")

// b)
const contadorDeLetras = (texto = "") => {
  texto = texto.toLocaleLowerCase();
  if(!texto) return console.warn("ingrese texto");
  if(typeof texto !== "string") return console.error("No ingresaste una cadena de texto");

  let vocales = 0;
  let consonantes = 0;

  for(let letra of texto){
    if(/[aeiouáéíóúü]/.test(letra)) vocales++;
    if(/[bcdfghjklmnñpqrstvwxyz]/.test(letra)) consonantes++;
  }
  return console.info({
    texto,
    vocales,
    consonantes
  })
}
contadorDeLetras("Hola a Todos");

/*19) Programa una función que valide que un texto sea un nombre válido,
 pe. miFuncion("Jonathan MirCha") devolverá verdadero.*/

// a)
function nombreValido (nombre) {
  let validar = /^[a-zA-Z]+\s[a-zA-Z]+$/ig;
  return validar.test(nombre);
}
console.log(nombreValido("Jonathan MirCha"))// true
console.log(nombreValido("Jonathan Mi22rCha"))// false

// b)
const validarNombre = (nombre) => {
  if(!nombre) return console.warn("ingrese nombre");
  if(typeof nombre !== "string") console.error(`${nombre} el dato ingresado no es valido`)

  let validador = /^[a-zA-ZÑñáéíóúü\s]+$/g.test(nombre);
  return (validador)
  ? console.log(`${nombre} es un nombre valido`)
  : console.warn(`${nombre} no es un nombre valido`);
}
validarNombre("Franco Martínez");
/*20) Programa una función que valide que un texto sea un email válido,
 pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.*/

 // a)
 function validarCorreo (correo) {
  let validar = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return validar.test(correo);
 }

 console.log(validarCorreo("jonmircha@gmail.com"));// true
 console.log(validarCorreo("jonmircha@gmail")) // false

// b)
const emailValido = (email = "") =>{
  if(!email) return console.warn("ingrese un email");
  if(typeof email !== "string") return console.error(`El email ${email} introducido no es valido`);

 let validarEmail = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);
 return (validarEmail) 
 ? console.info(`El ${email} es valido`)
 : console.warn(`El ${email} No es valido`);
}

emailValido("francisco08@gmail.com");

// 19 y 20

const validarPatron = (text = "", patron = undefined) => {
  if(!text) return console.warn("ingrese texto a Evaluar");
  if(typeof text !== "string") return console.error(`El valor ${text} no es valido`);

  if(patron === undefined) return console.warn("No se ingreso Patron");
  if(!patron instanceof RegExp) return console.error(`La Expresion ${patron} no es valida`);

  let expReg = patron.test(text);

  return (expReg)
  ? console.log(`"${text}" cumple con el patron ingresado`)
  : console.warn(`"${text}" No cumple con el patron ingresado`);
}

validarPatron("franco Martínez", /^[a-zA-ZÑñáéíóúü\s]+$/g);
validarPatron("francisco08@gmail.com", new RegExp("[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})", "i"))