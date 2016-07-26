/**
 * Created by Jewel Mahanta (@lap00zza) on 26-07-2016.
 */

// https://www.shiftedup.com/2015/05/07/five-programming-problems-every-software-engineer-should-be-able-to-solve-in-less-than-1-hour
/*Problem 1
 Write three functions that compute the sum of the numbers in a given list using a for-loop, a while-loop, and recursion.
 */
var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using For Loop
var sum = 0;
for(var b = 0; b < a.length; b += 1){
    sum += a[b];
}
console.log("Value using For Loop: " + sum);

// Using While Loop
var counter = 0;
 var sum_1 = 0;
while (counter < a.length){
    sum_1 += a[counter];
    counter += 1;
}
console.log("Value using While Loop: " + sum_1);

// Using Recursion
function sumOfList(array, index) {
    if(index < array.length){
        return array[index] + sumOfList(array, index + 1)
    }
    else {
        return 0
    }
}

var index = 0;
var sumList = sumOfList(a, index);
console.log("Value using Recursion: " + sumList);
