const obj={
        name:'sanitta',
        data:function (){
            console.log(this.name)
        }
    };
    const obj2={
        name:'sanu'
    }
    obj.data.call(obj2)
    