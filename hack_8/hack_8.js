/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * 1) anexar al array result los items [bar,baz,qux]
 * 2) los 2 primeros items reescribir el caracter "a" por @
 * modificar el último item "quz" a mayúscula
 *  
 * 
 * output => ["b@r","b@z","QUX"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = [];

for (let i of arr.slice(1,-1)){
    i = i.replace('a','@')
    result.push(i)
}
result[result.length - 1] = result[result.length - 1].toUpperCase();
console.log(result);

//export result
module.exports = result;