let array=[1,2,3,7,5,6,3]
function data(num)
{
    if(array.length<2)
    {
        return null;
    }
    
     seta=[...array].sort((a,b)=>b-a)
    
        return seta[1]
    
}
console.log(data(array))


// finds the second largest

// let array=[1,2,4,5,6,7,8,9,10]
// let max=Math.max(...array)
// let secmax=Math.max(...array.filter(num=>num!=max));
// console.log(secmax)