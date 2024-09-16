
function*data(){
    yield 123;
    yield "address"
}
let gen=data();
console.log(gen.next().value)
for(var i=1;i<=10;i++)
{
    console.log(i)
}
console.log(gen.next().value)
for(var i=1;i<=10;i++)
{
    console.log(i)
}


// function*data(){
//     let a=1
//     while(a <= 10){
    
//     yield 5*a
//     a++
//     }
// }
// const aaa=data()

//  let inter =   setInterval(()=>{
//         let res = aaa.next();
        
//         if(res.done==true){
//             clearInterval(inter)
//         }else{
//             console.log(res.value)
//         }
//     },1000)