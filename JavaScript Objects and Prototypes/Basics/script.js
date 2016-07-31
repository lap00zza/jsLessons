/**
 * Created by Jewel Mahanta (@lap00zza) on 30-07-2016.
 */
"use strict";
/*global display

 */
/*display("Hello World");

var cat = {"name": "Alex", "type": "persian"};
display(cat);*/

/*
function Cat(name, color) {
    "use strict";
    this.name = name;
    this.color = color;
}
*/

/*var nice = new Cat("Joanita", "Brown");
display(nice);*/
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
/*var hello = Object.create(Cat, {
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
display(hello);*/

/*
class Dog {
    constructor (firstName, lastName, color) {
        this.name = {first: firstName, last: lastName};
        this.color = color;
    }

    static speak() {
        display("Woof! Woof!");
    }
}

var dog = new Dog("Boom", "Chick", "Black");
display(dog);
window.console.log(dog);
Dog.speak();
window.console.log(Object.getOwnPropertyDescriptor(Dog, "name"));
Object.defineProperty(dog, "name", {writable: false});
dog.name.first = "Eww";
window.console.log(dog.name.first, dog.name.last);*/

var cat = {
    name: {first: "Canine", last: "McMeow"},
    color: "White"
};
// display(cat);
Object.defineProperty(cat, "name", {enumerable: true});
for (var propertyName in cat) {
    window.console.log(propertyName + " : " + cat[propertyName]);
}
window.console.log(JSON.stringify(cat));
Object.defineProperty(cat, "fullName", {
    // Getter and setters
    get: function () {
        return this.name.first + " " + this.name.last;
    },
    set: function (value) {

        var nameParts = value.split(" ");
        this.name.first = nameParts[0];
        this.name.last = nameParts[1];
    }
});
display(cat.fullName);
cat.fullName = "Lightning McBowWow";
display(cat.fullName);