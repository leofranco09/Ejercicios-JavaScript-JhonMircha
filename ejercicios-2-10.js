/*5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".*/
  // a)
  function revertirPalabra(cadena) {
    return cadena.split("").reverse().join("");
  }
  console.log(revertirPalabra("Hola Mundo"));

// b)
const alreves = (letra) => {
  let final = "";
  for (let i = letra.length -1; i >= 0; i--){
    final += letra[i];
  }
  return final;
}
console.log(alreves("Hola a Todos"));

// c)
const invertirLetras = (letras = "") =>
(!letras)
  ? console.warn("ingrese palabras")
  : console.log(letras.split("").reverse().join(""));

invertirLetras("Hola JavaScript");

/*6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, 
pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.*/

// a)
function contar(cadena, buscar) {
  let regex = new RegExp(buscar, 'ig');
  let resultado = cadena.match(regex);

  if(!resultado) return 0;
  return resultado.length;
}
console.log(contar("hola mundo adios mundo", "mundo"));

// b)
const buscador = (cadena = "", buscar = "") => {
  if(!cadena) return console.warn("No se ingreso el parrafo para ser testeado");

  if(!buscar) return console.warn("No se indico el patron para Buscar");

  let i = 0;
  let coincidencias = 0;

  while(i !== -1){
    i = cadena.indexOf(buscar, i);
    if(i !== -1) {
      i++;
      coincidencias++;
    }
  }
  return console.log(`La palabra ${buscar} se repite ${coincidencias} veces`);
}
buscador("hola mundo adios mundo", "mundo");

/*7) Programa una función que valide si una palabra o frase dada, es un palíndromo 
(que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.*/

// a) 
function esPalindromo(text){
  let buscar = text.toLowerCase();
  let darVuelta = buscar.split("").reverse().join("");
  if(darVuelta === buscar){
    return true;
  }
  return false;
}
console.log(esPalindromo("Salas"));

/*8) Programa una función que elimine cierto patrón de caracteres de un texto dado,
pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.*/

// a)
function eliminarPatron(letras, patron) {
  let regex1 = new RegExp(patron, "ig");
  let result = letras.replace(regex1, "");

  return result;
}
console.log(eliminarPatron("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz"))
