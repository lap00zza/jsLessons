/**
 * Created by Jewel Mahanta (@lap00zza) on 24-07-2016.
 */
/* Loops

    The for loop has 3 part
    initialization clause; conditional clause; update clause

    So,
        for(;;) {}
        is a loop that will run forever since there is no condition to make it fail

        for (var a = 5; a < 10; a += 1){
            a = 6;
            console.log(a);
        }
        is also a loop that will run forever because every time the loop runs, it sets
        the value of a back to 6.

    Basically a loop is something that runs forever until something stops it from running.
 */
for(var a = 10; a >= 1; a -= 1){
    console.log(a);
}

// This loop will run forever
/*for(;;) {
    console.log("kawaii");
}*/

// This loop will run forever
/*for (var b = 5; b < 10; b += 1){
    b = 6;
    console.log(b);
}*/

a = 10;
while(true){
    if (!(a >= 1)){
        break;
    }
    console.log(a);
    a -= 1;
}