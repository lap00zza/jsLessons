/**
 * Created by Jewel Mahanta (@lap00zza) on 31-07-2016.
 */

/* The notable differences in using class is that the constructor is not a function
* but a class. Also the properties of the extended class can't be enumerated*/
"use strict";
class Animal {
    constructor (voice) {
        this.voice = voice || "Grunt";
    }
    speak () {
        console.log(this.voice);
    }
}
class Cat extends Animal{
    constructor (name, color) {
        super("Meow");
        this.name = name || "Canine";
        this.color = color || "McCat";
    }
}

var woof = new Cat("Lapoozza", "White");
console.log(woof.constructor);
console.log(woof.__proto__.__proto__.hasOwnProperty("speak"));