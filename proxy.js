let user={name:'ad',
    password:12334
};
let handler={
    get:(target,property)=>{
if(property=="password")
        {
            console.log("connot be access")
        }
        else{
            return target[property]
        }
    }
}
let obj=new Proxy(user,handler)

console.log(obj.name)