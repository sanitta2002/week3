let array=[1,2,3,4,5]
 let newarr=array.filter((e)=>e%2==0)
  let sum=newarr.reduce((a,b)=>{
      return a+b;
  })
  console.log(sum)