// capitalize the first letter of every word in a given string.

function data(str)
{
    return str.split(' ').map(word=>word.charAt(0).toUpperCase() +word.slice(1)).join(' ')
}
let result=data("hello i am sanitta")
console.log(result)