/**
 * Created by Jewel Mahanta (@lap00zza) on 24-07-2016.
 */

/* Functions

 */

var a = 10.784;
console.log(a.toFixed(2), typeof a.toFixed(2));

function foo() {
    b = b + 2;
    b = b - 5;
}

var b = 6;
foo();
console.log(b);

foo();
foo();
console.log(b);

function koo(bar) {
    q = q * 8;
    q = q + bar;
    return q/2
}

var q = 8;
var f = koo(7);
console.log(q, f);