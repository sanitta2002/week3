let array=[1,2,3,4,5]
let newarr=array.reduce((a,b)=>{
    return a<b ? b:a;
})
console.log(newarr)