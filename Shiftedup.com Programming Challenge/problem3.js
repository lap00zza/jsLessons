/**
 * Created by Jewel Mahanta (@lap00zza) on 26-07-2016.
 */

/* Problem 3

 Write a function that computes the list of the first 100 Fibonacci numbers. By definition,
 the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is
 the sum of the previous two. As an example, here are the first 10
 Fibonacci numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, and 34.

*/
var counter = 0;
function fibonacci() {
    var numA =0;
    var numB = 1;
    var fib = [0, 1];
    while (counter < 100){
        fib.push(numA + numB);
        var numC = numA;
        numA = numB;
        numB = numC + numB;
        counter += 1;

    }
    return fib
}

var series = fibonacci();
console.log(series);