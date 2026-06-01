/*Inheitance with linking the prototypes of the two classes together */
class Vehicle{
    constructor(make,model){
        this.make = make;
        this.model = model;
    }
     start(status){
        if(status){
            console.log("Starting....");
        }
        else{
            console.log("Error in starting...");
        }
    }
}

class Car{
    constructor(wheels){
        this.wheels = wheels;
    }
    info(){
        console.log("This is a Car which is now...");
    }
    count(){
        console.log(`The number of wheels on this are ${this.wheels}`);
    }
}


Object.setPrototypeOf(Car.prototype, Vehicle.prototype);
let Swift = new Car(4);
Swift.info();
Swift.start(true);
Swift.count();