/**
 * Created by Jewel Mahanta (@lap00zza) on 12-08-2016.
 */
var Promise = require("./promise.js");
var promise = new Promise();

setTimeout(function () {
    "use strict";
    promise.resolve("Oh yeah");
}, 1000);

setTimeout(function () {
    "use strict";
    promise.done(function (result) {
        console.log("Handler added after deferred object is done.", result);
    });
}, 2000);

promise.done(function (result) {
    console.log("Deferred object has completed.", result);
});

var promise2 = new Promise();
promise2.failed(function (reason) {
    "use strict";
    console.log("Promise#2 failed", reason);
}).done(function (reason) {
    console.log("Promise#2 has completed", reason);
});

setTimeout(function () {
    "use strict";
    promise2.fail("F%$%");
}, 1000);

console.log("Application completed");