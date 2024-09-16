// find the longest word in a string

const name="hii hello"
const spli=name.split(' ')
const output=spli.reduce((acc,val)=>{
    if(val.length>acc.length)
    {
        return val
    }
    return acc
})
console.log(output)