const person = {
    name: "Yashvi",

    greet(){
        console.log(`Hi, I am ${this.name}`);
    }
}

person.greet();  //the context of name:"Yashvi" stays 
//when the reference is passed the context of this.name is lost to solve this we bind the context
let greetRef = person.greet;  
greetRef();
let greetReference = person.greet.bind({name: "Rina"});
greetReference();