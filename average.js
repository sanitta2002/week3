let array=[7,2,3,4,5]
let sum=array.reduce((acc,val)=>{
    return acc=acc+val
},0)
let avg=sum/array.length
console.log(avg)