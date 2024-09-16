// squares the number

const arr=[1,2,3,4,5,6,7,8,9,10]
let newarr=arr.map((item)=>{
    if(item%2==0)
    {
        return item*item;
    }
  return item**item
   
});
console.log(newarr)