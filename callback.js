function msg(name,callback)
{
    console.log("hello " +name)
    callback()
}
function good(){ 
    console.log("good bye")
}
msg("sanitta",good)
