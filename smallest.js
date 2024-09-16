// find the smallest value

let array=[2,3,4,5,6,7,8,9,10]
let newarr=array.map(item=>item*2)
let rev=newarr.reduce((acc,val)=>{
    if(val<acc)
    {
        return acc=val;
    }
    return acc;
})

console.log(rev)