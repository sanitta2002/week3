let obj={
        a:10,
        b:20,
        c:30
    }
    let sum=0
    for(let key in obj)
    {
        sum=sum+obj[key]
    }
    console.log(sum)
    