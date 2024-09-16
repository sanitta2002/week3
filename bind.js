
const obj={
    name:'sanitta',
    data:function(){
        console.log(this.name)
    }
};
const pre=obj.data.bind(obj)
pre();
pre();
pre();