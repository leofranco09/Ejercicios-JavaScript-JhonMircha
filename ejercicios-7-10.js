/*21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado,
 pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].*/

// a)
function elevarAlCuadrado(number){
  let result = [];

  for(let i = 0; i < number.length; i++){
    result.push(number[i] ** 2);
  }
  return result;
}
console.log(elevarAlCuadrado([1, 4, 5]));

// b)
const elevar = (numero) => numero.map((num) => Math.pow(num, 2));
 console.log(elevar([1, 4, 5]));

// c)
const devolverCuadrado = (arr = undefined) => {
  if(arr === undefined) return console.warn("No ingresaste un array de numeros");
  if(!arr instanceof Array) return console.error("El de dato ingresado no es array");
  if(arr.length === 0) console.warn("El array esta vacio");

  for(let num of arr){
    if(typeof num !== "number") return console.warn(`El valor ${num} ingresado no es un Numero`);
  }
  const newArr = arr.map(num => num * num);
  return console.log(`El arreglo Original ${arr}\n El arreglo elevado al cuadrado ${newArr}`);
}
devolverCuadrado([1, 4, 5]);
devolverCuadrado(["1"]);

/*22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array,
pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].*/

// a)
function numeroAltoYBajo(numero){
  let result = [];
  result.push(Math.max(...numero));
  result.push(Math.min(...numero));
  return result;

}
console.log(numeroAltoYBajo([1, 4, 5, 99, -60]));

// b)
const maxYMin = (numero) => {
  let max = Math.max(...numero);
  let min = Math.min(...numero);
  return [max, min];
}
console.log(maxYMin([1, 4, 5, 99, -60]));

// c)
const arrMinMax = (arr = undefined) => {
  if(arr === undefined) return console.warn("No ingresaste un array de numeros");
  if(!arr instanceof Array) return console.error("El de dato ingresado no es array");
  if(arr.length === 0) console.warn("El array esta vacio");

  for(let num of arr){
    if(typeof num !== "number") return console.warn(`El valor ${num} ingresado no es un Numero`);
  }
  return console.log(`El array original ${arr}\nValor Mayor: ${Math.max(...arr)}\nValor Menor: ${Math.min(...arr)}`);
}
arrMinMax([1, 4, 5, 99, -60])
/*23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena
 los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá 
 {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.*/

 // a)
 function separarNumeros(numeros) {
  let par = [];
  let impar = [];

  for(let i = 0; i < numeros.length; i++){
    if(numeros[i] % 2 === 0) {
      par.push(numeros[i]);
    }else {
      impar.push(numeros[i]);
    }
  }

  return console.log({
    par,
    impar
  })
 }
 separarNumeros([1,2,3,4,5,6,7,8,9,0]);

 // b)
const aislarNumero = (numero) => {
  let par = [];
  let impar = [];

  numero.forEach(num => {
    if(num % 2 === 0){
      par.push(num)
    }else {
      impar.push(num)
    }
  });
  return console.log({par, impar});
}

aislarNumero([1,2,3,4,5,6,7,8,9,0]);

// c) 
const separarParesImpares = (arr = undefined) => {
  if(arr === undefined) return console.warn("No ingresaste un array de numeros");
  if(!arr instanceof Array) return console.error("El de dato ingresado no es array");
  if(arr.length === 0) console.warn("El array esta vacio");

  for(let num of arr){
    if(typeof num !== "number") return console.warn(`El valor ${num} ingresado no es un Numero`);
  }
  return console.info({
    pares: arr.filter(num => num % 2 === 0),
    impares: arr.filter(num => num % 2 === 1)
  })
}
separarParesImpares([1,2,3,4,5,6,7,8,9,0]);