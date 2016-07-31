var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by dell on 31-07-2016.
 */
var Animal = (function () {
    function Animal(voice) {
        this.voice = voice || "Grunt";
    }
    Animal.prototype.speak = function () {
        console.log(this.voice);
    };
    return Animal;
}());
var Cat = (function (_super) {
    __extends(Cat, _super);
    function Cat(name, color) {
        _super.call(this, "Meow");
        this.name = name || "Canine";
        this.color = color || "McCat";
    }
    return Cat;
}(Animal));
var woof = new Cat("Lapoozza", "White");
console.log(woof.constructor);
//# sourceMappingURL=prototype_with_classes.js.map