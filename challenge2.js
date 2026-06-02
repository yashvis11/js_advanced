/*Task1:  Create Inheritance Using Prototypes
Create a constructor Animal with a method makeSound(). Then create a constructor Dog 
that inherits from Animal and adds a method bark() */

function Animal() {} //no constructor keyword in constructor functions

function Dog() {}
Animal.prototype.makeSound = function () { //add method to prototype
  return `Animal sound`;
};
//make it so that all of the Dog's objects inherit Animal properties
Dog.prototype = Object.create(Animal.prototype); 
Dog.prototype.bark = function () { //add method
  return `Woof!`;
};
//make sure the objects know they belong to Dog
Dog.prototype.constructor = Dog;

/*Task2: Shape and Rectangle Inheritance

Create a constructor function Shape that takes color as a parameter and has a method getColor() 
that returns the color.
Create another constructor Rectangle that inherits from Shape and adds properties width and height. 
Add a method getArea() to Rectangle that returns the area of the rectangle. */

function Shape(color) {
  this.color = color;
}
Shape.prototype.getColor = function () {
  return this.color;
};

function Rectangle(width, height, color) {
  Shape.call(this, color);
  this.width = width;
  this.height = height;
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.getArea = function () {
  return this.height * this.width;
};
Rectangle.prototype.constructor = Rectangle;
