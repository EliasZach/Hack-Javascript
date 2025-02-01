/**
 * mediante el loop map agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */

const numeros = [7,6,5,4,3,2,1]

let result = numeros.map(num => (num % 2 !== 0 ? num : null)).filter(num => num !== null); 

//export result
module.exports = result;