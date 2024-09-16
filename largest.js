let array=[2,3,4,5,6,7,8,9,10]
let newarr=array.map(item=>item*2)
console.log(newarr)
let lag=array[0]
newarr.forEach((e)=>{
    if(e<lag)
    {
        lag=e;
    }
});
console.log("largest element:"+lag)