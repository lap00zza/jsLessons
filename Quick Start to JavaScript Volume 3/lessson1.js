/**
 * Created by Jewel Mahanta (@lap00zza) on 28-07-2016.
 */
/* Objects

 */

/*var coffeeFlavour = "latte";
var coffeeTemperature = "hot";
var coffeeOunces = 30;
var coffeeMilk = true;*/

var coffee = {
    /*
        Remember that quotes are not required for javascript objects.
        They are only required if we use reserved keywords as property names,
        or if we use special characters.
     */
    flavour: "latte",
    temperature: "hot",
    ounces: 30,
    milk: true,
    // Methods are properties with a function as value
    reheat: function () {
        'use strict';
        if (coffee.temperature === "cold") {
            coffee.temperature = "hot";
            alert("Coffee is reheated");
        }
        console.log("Reheated");
    }
};

coffee.temperature = "cold";
coffee.ounces = 50;
console.log(coffee);
coffee.reheat();