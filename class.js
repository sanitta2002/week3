
class obj{
        constructor(name,age){
          this.name=name;
            this.age=age;
        }
        
        data(){
            console.log(this.name,this.age)
        }
    }
    
    let pre=new obj('sanitta',22)
    pre.data();