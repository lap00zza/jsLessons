/**
 * Created by Jewel Mahanta (@lap00zza) on 26-07-2016.
 */
/* Problem 4

 Write a function that given a list of non negative integers, arranges them such that they form the
 largest possible number. For example, given [50, 2, 1, 9], the largest formed number is 95021.
*/

function largestFuse(numberList) {

    var seq = [];
    for (var a = 0; a < (numberList.length - 1); a++){
        console.log(a);
        if(Number(numberList[a]) > Number(numberList[a + 1])){
            seq.push(numberList[a]);
        }
    }
    console.log(seq);
}

largestFuse([9, 1, 45, 78]);
