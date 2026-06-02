class Person{
    constructor(name){
        this.name = name;
    }
    greet(){
        console.log(`Hi I am ${this.name}`);
    }
}

let yashvi = new Person("Yashvi");
yashvi.greet();
let ashu = new Person("Ashu");
ashu.greet();

const fruit = {
    color: "Red",

    output(){
        console.log(`The color of the fruit is ${this.color}`);
    }
}

fruit.output();
