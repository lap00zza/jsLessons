/**
 * Created by Jewel Mahanta (@lap00zza) on 30-07-2016.
 */
/*global display

 */
/*display("Hello World");

var cat = {"name": "Alex", "type": "persian"};
display(cat);*/

function Cat(name, color) {
    "use strict";
    this.name = name;
    this.color = color;
}

var nice = new Cat("Joanita", "Brown");
display(nice);
/*var lapoozza = Object.create(Object.prototype, {
    name : {
        value: "Lapoozza",
        enumerable: true,
        writable: true,
        configurable: true
    },
    color : {
        value: "Black",
        enumerable: true,
        writable: true,
        configurable: true
    }
});*/
var hello = Object.create(Cat, {
    name: {
        value: "Lapoozza",
        // writable: true,
        enumerable: true
        // configurable: true
    },
    color: {
        value: "Blond",
        // writable: true,
        enumerable: true
        // configurable: true
    }
});
display(hello);

class Dog {
    constructor (name, color) {
        this.name = name;
        this.color = color;
    }
    
    speak() {
        display("Woof! Woof!");
    }
}
display(Dog);
var dog = new Dog("Boom", "Black");
dog.speak();