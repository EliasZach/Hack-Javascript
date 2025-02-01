let numberArray = [1,2,3,4,5];
let stringArray = ["foo","bar","baz","qux","echo"]
let result = [];

const mapnum = {
    1:'one',
    3:'three',
    5:'five'
}
const maparr = {
    foo:'f00',
    bar:'Bar',
    baz:'b@z', 
    qux:'quX',
    echo:'3ch0'
}

result.push('h@ck')

for (let i of numberArray){
    if (i in mapnum){
        result.push(mapnum[i])
    } else {
    result.push(i)
    }
}

result.push('h@ck')

for (let i of stringArray){
    if (i in maparr){
        result.push(maparr[i])
    } else {
    result.push(i)
    }
}
result.push('h@ck')

console.log(result);