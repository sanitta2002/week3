// find sum of odd number in array

let array=[1,2,3,4,5,6,7,8,9,10]
let newarr=array.reduce((acc,val)=>{
    if(val%2!=0)
    {
        return acc=acc+val;
    }
    return acc
})
console.log(newarr)