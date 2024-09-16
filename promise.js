const promise=new Promise((resolve,reject)=>
{
    if(resolve)
    {
        console.log("sucess");
    }
    else{
        console.log("fail")
    }
});
promise
.then((msg)=>{
    console.log(msg)
})
.catch((err)=>
{
    console.log(err)
})