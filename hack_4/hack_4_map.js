/**
 * mediante el map for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
const numeros = [1,2,3,4,5,6,7]

let result = numeros.map(num => (num % 2 !== 0 ? num : null)).filter(num => num !== null); 

//export result
module.exports = result;