/**
 * Created by Jewel Mahanta (@lap00zza) on 28-07-2016.
 */
/* Object literals and Object Constructors
 */


// These two are called object literals
var mark = {
    name: "Mark",
    tShirtColor: "blue"
};

var lisa = {
    name: "Lisa",
    tShirtColor: "pink"
};

// This is a Object Constructor
function Friend(name, tShirtColor) {
    'use strict';
    this.name = name;
    this.tShirtColor = tShirtColor;
}

var danny = new Friend("Danny", "Navy Blue");
console.log(danny.name, danny.tShirtColor);

/* There are 3 types of Objects in js. They are
   - Host Objects (Document, Console, Element etc)
   - Core Objects (Math, Object, String etc)
   - Author Objects and Objects defined as a part of
     using external libraries like jquery, AngularJS etc
 */