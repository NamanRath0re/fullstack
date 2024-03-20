function sub(a,b){
    return a-b
}

function add(a,b){
    return a+b;
}
// let arr = [1,2,4,5,6]

// let x= 25;
class name {
    constructor (name,age){
        this.name=name;
        this.age=age;
    }
    display(name,age){
        console.log(this.name + "is" + this.age + "years old")
    }
}


export default add;
export {sub , name};
