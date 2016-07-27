/**
 * Created by Jewel Mahanta (@lap00zza) on 27-07-2016.
 */

/* While and Do While loops
 */

var i = 0;

// This is a exit control loop. It is guaranteed to run at least
// once.
/*do {
    console.log(i);
    i++;
} while (i < 11);*/

// This is a entry control loop.
while (i < 11){
    console.log(i);
    i++;
}

var b = [1, 2, 5, 8, 9];
b.forEach(function (i, j, k) {
    console.log(i, j, k);
});