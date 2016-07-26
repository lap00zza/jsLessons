/**
 * Created by Jewel Mahanta (@lap00zza) on 26-07-2016.
 */
/*Problem 2

 Write a function that combines two lists by alternatively taking elements. For example: given the
 two lists [a, b, c] and [1, 2, 3], the function should return [a, 1, b, 2, c, 3].
*/

var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var b = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
var index = 0;
function mixItUp() {
    /*
     The idea is simple. If the variable 'index' is 0
     then we simply push the first item of list a to the
     variable 'mixItUp'. If it is not 0 then we know that
     we are only supposed to push the items of 'list a' when
     index is an even number. What I mean is :
     [1, a, 2, b, 3, c, ...]
      0  1  2  3  4  5  ... (even values of index means push from list a
                             odd values of index means push from list b)

     So the real problem is breaking down the even and the odd
     series of index values to a linear set of values using which
     we can get the items of list a and list b

     So, for list a,
     var d = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
     for(var e = 0; e < d.length; e += 1){
     console.log(d[e] / 2);
     }

     Output => 0 1 2 3 4 5 6 7 8 9

     and for list b,
     var d = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
     for(var e = 0; e < d.length; e += 1){
     console.log(Math.floor(d[e] / 2));
     }

     Output => 0 1 2 3 4 5 6 7 8 9
     */

    var finalList = [];
    while (index < a.length + b.length){
        if(index === 0){
            finalList.push(a[index]);
        }
        else if(index !== 0 && index % 2 ===0){
            finalList.push(a[index / 2]);
        }
        else {

            finalList.push(b[Math.floor(index / 2)]);
        }
        index += 1;
    }
    return finalList
}

var c = mixItUp();
console.log(c);

