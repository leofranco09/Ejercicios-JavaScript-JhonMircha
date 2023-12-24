/* 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2)
 devolverá 4 base 10.*/

 //a)
 const conversorBinario = (numero = undefined, base = undefined) => {
  if(numero === undefined) return console.warn("ingrese un numero");
  if(typeof numero !== "number") return console.warn(`El valor ${numero} ingresado no es valido`);

  if(base === undefined) return console.warn("ingrese la base");
  if(typeof base !== "number") return console.warn(`El valor de ${base} no es una base ingrese el numero correcto`);

  if(base === 2) {
    return console.info(`el valor ${numero}, ${base} base es igual a ${parseInt(numero, base)} base 10`);
  }else if(base === 10) {
    return console.info(`el valor ${numero}, ${base} base es igual a ${numero.toString(2)} base 2`);
  }
 }

 conversorBinario(4, 10);
 conversorBinario(100, 2);

/*16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada,
 pe. miFuncion(1000, 20) devolverá 800.*/

 // a) 
 function descuento(sub, desc) {
  if(Math.sign(sub) === -1) return console.warn("ingrese un numero mayor a 0");
  if(Math.sign(desc) === -1) return console.warn("no hay descuentos");
  if(typeof sub !== "number" || typeof desc !== "number") return console.error("ingrese numeros")
  if(desc < 0 || desc > 100) return console.error("el valor debe ser entre 0 y 100")

  let descuento = (sub * desc) / 100;
  let resultado = sub - descuento;

  return console.log(`Monto a pagar es ${resultado}`);
 }
 descuento(1000, 20);
/*17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy,
 pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
 */

 // a)
 function calcularYear(fecha){
    let fechaACalcular = fecha.getFullYear();
    let fecha20 = new Date(2020,0,1);
    let year20 = fecha20.getFullYear() - 1;

    return console.log(`los años que pasaron son ${year20 - fechaACalcular}`)
 }
 calcularYear(new Date(1984,4,23));

 // b) 
 const calcularanio = (fecha) => {
  if(!fecha instanceof Date) return console.log("No ingresaste una fecha valida");

  let hoy = new Date().getTime() - fecha.getTime();
  let anio = 1000 * 60 * 60 * 24 * 365;
  let anioHumano = Math.floor(hoy / anio);

  return (Math.sign(anioHumano) === -1)
  ? console.info(`Faltan ${Math.abs(anioHumano)} años para el ${fecha.getFullYear()}`)
  : (Math.sign(anioHumano) === 1)
   ? console.info(`Han pasado ${anioHumano} años desde ${fecha.getFullYear()}`)
   :console.log(`estamos en el año actual ${fecha.getFullYear()}`);
 }
 calcularanio(new Date(1994, 1, 9))