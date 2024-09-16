const obj={
    name:'sanitta',
    data:function (a){
        console.log(this.name+" "+a)
    }
};
const obj2={
    name:'sanu'
}
obj.data.apply(obj2,['johnson'])