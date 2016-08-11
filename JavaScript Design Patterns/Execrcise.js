/**
 * Created by Jewel Mahanta (@lap00zza) on 10-08-2016.
 */

// Common design patterns
/*
function Calculator(start) {
    var self = this;
    this.add = function add(x) {
        "use strict";
        start += x;
        return self;
    };
    this.multiply = function multiply(x) {
        "use strict";
        start *= x;
        return self;
    };
    this.equals = function (callback) {
        "use strict";
        callback(start);
    };
}

var calc = new Calculator(0);
calc
    .add(10)
    .add(10)
    .multiply(10)
    .equals(
        function (x) {
            console.log(x);
        }
    );*/

// Observable Properties
function Book(name, price) {
    "use strict";
    var priceChanging = [],
        priceChanged = [];

    // ECMA Script 5 style
    Object.defineProperty(this, "name", {
        get: function () {
            return name;
        }
    });
    Object.defineProperty(this, "price", {
        get: function () {
            return price;
        },
        set: function (value) {
            if (value !== undefined && value !== price) {
                for (var i = 0; i < priceChanging.length; i++){
                    if (!priceChanging[i](this, value)){
                        return price;
                    }
                }
                price = value;
                for (var j = 0; j < priceChanged.length; j++){
                    priceChanged[j](this);
                }
            }
            return price;
        }
    });

    /*this.name = function (value) {
        return name;
    };*/
    /*this.price = function (value) {
        if (value !== undefined && value !== price) {
            for (var i = 0; i < priceChanging.length; i++){
                if (!priceChanging[i](this, value)){
                    return price;
                }
            }
            price = value;
            for (var j = 0; j < priceChanged.length; j++){
                priceChanged[j](this);
            }
        }
        return price;
    };*/
    this.onPriceChanging = function (callback) {
        priceChanging.push(callback);
    };
    this.onPriceChanged = function (callback) {
        priceChanged.push(callback);
    };
}

var book = new Book("Oliver Twist", 20);
// console.log(Book.prototype, book.__proto__.__proto__);
console.log("Name is: " + book.name);
console.log("Price is: $" + book.price);

book.onPriceChanging(function (b, value) {
    if (value > 100) {
        console.log("Price for: " + b.name +" have gone too high");
        return false;
    }
    return true;
});

book.onPriceChanging(function (b, value) {
    console.log(b.price + " --->> " + value);
    return true;
});
book.onPriceChanged(function (b) {
   console.log("Book price has changed to: $" + b.price);
});

book.price = 40;
book.price = 200;