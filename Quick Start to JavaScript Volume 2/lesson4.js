/**
 * Created by Jewel Mahanta (@lap00zza) on 27-07-2016.
 */

/* Functions

 */

function sayMyName(name) {
    console.log("Hi there: " + name);
}

sayMyName("Mark");
sayMyName("Lisa");
sayMyName();

function area(side) {
    return Math.pow(side, 2)
}

console.log(area(3));

function randGen() {
    return Math.random()
}

console.log(randGen());