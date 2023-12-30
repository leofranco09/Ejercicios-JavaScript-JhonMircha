/*24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos,
 el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente,
  pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.*/

// a)
function ascYDesc(arr) {
let ascendente = arr.slice().sort((a, b) => a - b);
let descendente = arr.slice().sort((a, b) => b - a);

console.log({
  ascendente,
  descendente
})
}
ascYDesc([7, 5,7,8,6,19,190]);

// b) 
const ordenarArreglo = (arr = undefined) => {
  if(arr === undefined) return console.warn("No ingresaste un arreglo de numero");
  if(!(arr instanceof Array)) return console.warn("El valor que ingresaste no es un arrglo");
  if(arr.length === 0) console.warn("El arrglo que ingresaste esta Vacio");

  for(let num of arr){
    if(typeof num !== "number") return console.warn("No ingresaste un Numero dentro del arreglo")
  }
  return console.info({
    arr,
    asc: arr.map(el => el).sort(),
    desc: arr.map(el => el).sort().reverse()
  })
}
ordenarArreglo([7, 5,7,8,6,])

/*25) Programa una función que dado un arreglo de elementos, elimine los duplicados,
 pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].*/

// a)
 function unicos(arr) {
  let unico = new Set(arr)
  return unico;
}
console.log(unicos(["x", 10, "x", 2, "10", 10, true, true]));

// b)
function sinRepetir(arr) {
  let sinRep = []
  for(let i = 0; i < arr.length; i++){
    if(sinRep.indexOf(arr[i]) === - 1){
      sinRep.push(arr[i]);
    }
  }
  return sinRep;
}
console.log(sinRepetir(["x", 10, "x", 2, "10", 10, true, true]));

// c)
const quitarDuplicado = (arr = undefined) => {
  if(arr === undefined) return console.warn("No ingresaste un arreglo de numero");
  if(!(arr instanceof Array)) return console.warn("El valor que ingresaste no es un arrglo");
  if(arr.length === 0) console.warn("El arrglo que ingresaste esta Vacio");
  if(arr.length === 1) console.warn("el arreglo almenos debe tener 2 valores");

  return console.info({
    original: arr,
    sinDuplicados: arr.filter((value, index, self) => self.indexOf(value) === index)
  })
}
quitarDuplicado(["x", 10, "x", 2, "10", 10, true, true]);

/*26) Programa una función que dado un arreglo de números obtenga el promedio,
 pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.*/

 // a)
function promedio(nota){
  let subtotal = nota.reduce((acc, num) => acc + num);
  let total = subtotal / nota.length;
  
  return console.log(`El promedio de nota es ${total}`)
}
promedio([9,8,7,6,5,4,3,2,1,0]);

// b)
const promedioReg = (arr = undefined) => {
  if(arr === undefined) return console.warn("No ingresaste un arreglo de numero");
  if(!(arr instanceof Array)) return console.warn("El valor que ingresaste no es un arrglo");
  if(arr.length === 0) console.warn("El arrglo que ingresaste esta Vacio");

  for(let num of arr){
    if(typeof num !== "number") return console.warn("No ingresaste un Numero dentro del arreglo")
  }
  return console.info(
    arr.reduce((total, num, index, arr) => {
      total += num;
      if(index === arr.length -1){
        return console.info(`El promedio de ${arr.join(" + ")} es ${total / arr.length}`)
      }else {
        return total;
      }
    })
  );
}
promedioReg([9,8,7,6,5,4,3,2,1,0]);