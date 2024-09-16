// return only string

let array=["a","b","c","d",4,5,7,{"df":34},()=>{},[]]
let arr=array.filter((e)=>
{
    if(typeof e=="string"){
         return true;
    }
   
});
console.log(arr)