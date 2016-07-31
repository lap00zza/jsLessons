/**
 * Created by Jewel Mahanta (@lap00zza) on 30-07-2016.
 */


function Animal(voice) {
    this.voice = voice || "grunt";
}
Animal.prototype.speak = function () {
    console.log(this.voice);
};

function Cat(name, color) {
    Animal.call(this, "Woof");
    this.name = name;
    this.color = color;
}

Cat.prototype.age = 23;
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;
console.log(Cat.prototype);
var fluffy = new Cat("Cute", "White");
fluffy.speak();
console.log(fluffy.__proto__);
// console.log(Cat.prototype === fluffy.__proto__);

/*
var cow = new Cat("Cow McWow", "Black");
console.log(cow.age);
console.log(cow.__proto__.__proto__.__proto__);
console.log(Object.keys(cow));
cow.age = 25;
console.log(cow.hasOwnProperty("age"));*/
