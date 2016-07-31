/**
 * Created by dell on 31-07-2016.
 */
class Animal {
    voice: string;
    constructor (voice) {
        this.voice = voice || "Grunt";
    }
    speak () {
        console.log(this.voice);
    }
}
class Cat extends Animal{
    name: string;
    color: string;
    constructor (name, color) {
        super("Meow");
        this.name = name || "Canine";
        this.color = color || "McCat";
    }
}

var woof = new Cat("Lapoozza", "White");
console.log(woof.constructor);