 let array=[1,2,3,4,5]
 let lag=array[0]
 array.forEach((e)=>{
 if(e>lag)
 {
     lag=e;
 }
 });
 console.log(lag)