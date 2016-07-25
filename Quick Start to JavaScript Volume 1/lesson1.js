/**
 * Created by Jewel Mahanta (@lap00zza) on 25-07-2016.
 */

/*
    2 + 2 ..............Number
    "Hello" + "World" ..String
    4 < 2 ..............Boolean
    2 + "3" ............String
    a + b ..............undefined
 */
var q = "9";
console.log("Yo");
console.warn("Cool");
console.error("Damn you !!!");

a = Boolean("ask");
console.log(Math.random() * 5);

// ==  lose equals
// === strict equals
if (q === 9){
    console.log("yeay");
}
else {
    console.log("Type mismatch")
}

for(var i = 0; i<100; i += 1){
    var num = Math.round(Math.random() * 15);
    if(num != 0) {
        if (num % 3 === 0 && num % 5 !== 0) {
            console.log("Fizz")
        }
        else if (num % 3 !== 0 && num % 5 === 0) {
            console.log("Buzz")
        }
        else if (num % 3 == 0 && num % 5 == 0) {
            console.log("Fizz Buzz")
        }
        else {
            console.log(num);
        }
    }
}