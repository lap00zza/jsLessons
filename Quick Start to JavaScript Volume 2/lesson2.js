/**
 * Created by Jewel Mahanta (@lap00zza) on 27-07-2016.
 */

/* For Loop

 */

for (var a = 1; a <= 100; a++){
    if (a % 3 === 0 && a % 5 !== 0){
        console.log("Fizz");
    }
    else if (a % 3 !== 0 && a % 5 === 0){
        console.log("Buzz");
    }
    else if (a % 3 === 0 && a % 5 === 0){
        console.log("Fizz Buzz");
    }
    else {
        console.log(a);
    }

}