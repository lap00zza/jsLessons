/**
 * Created by Jewel Mahanta (@lap00zza) on 12-08-2016.
 */
/*eslint no-undef: "error"*/
/*eslint-env node*/
var Promise = function () {
    /*
    * A simple promise API to test the deferred
    * functionality of JS.
    * */
    var data,
        done = [],
        fail = [],
        status = "progress";

    this.done = function (callback) {
        "use strict";
        done.push(callback);

        if (status === "done") {
            callback(data);
        }
        return this;
    };

    this.failed = function (callback) {
        "use strict";
        fail.push(callback);

        if (status === "failed") {
            callback(data);
        }
        return this;
    };

    this.resolve = function (result) {
        "use strict";
        if (status !== "progress") {
            throw "Promise has already completed with status: " + status;
        }
        status = "done";
        data = result;
        for (var i = 0; i < done.length; i++) {
            done[i](data);
        }
        return this;
    };

    this.fail = function (reason) {
        "use strict";
        if (status !== "progress") {
            throw "Promise has already completed with status: " + status;
        }
        status = "done";
        data = reason;
        for (var i = 0; i < done.length; i++) {
            fail[i](data);
        }
        return this;
    };
};

module.exports = Promise;