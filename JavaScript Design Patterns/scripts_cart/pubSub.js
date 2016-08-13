/**
 * Created by Jewel Mahanta (@lap00zza) on 11-08-2016.
 */
define(function () {
    "use strict";
    var cache = {};
    return {
        /*
        * The apply() method is identical to call(), except apply() requires an array as the second parameter.
        * The array represents the arguments for the target method."
        * id is either 'add-to-cart' or 'remove-from-cart'
        * */
        pub: function (id) {
            /*
            * This is the old format
            * - var args = Array.prototype.slice.call(arguments, 1);
            * */

            /*
            * ES6 introduced 2 new formats
            * - var args = Array.from(arguments, 1);
            * */

            /*
            * One more way of converting arguments to arrays using
            * native methods. Why we start from 1? Well because we
            * don't want the first element.
            * */
            var args = [];
            for (var j = 1; j < arguments.length; j++) {
                args.push(arguments[j]);
            }

            if (!cache[id]) {
                /*
                * If this key does not exist in cache object, we make
                * a new key and assign a object to it. We store the args
                * into an array to make sure that the callbacks that were
                * subscribed later can still access these args and run.
                * */
                cache[id] = {
                    callbacks: [],
                    args: [args]
                };
            }
            for (var i = 0, ilength = cache[id].callbacks.length; i < ilength; i++) {
                cache[id].callbacks[i].apply(this, args);
            }
        },
        sub: function (id, fn) {
            if (!cache[id]) {
                cache[id] = {
                    callbacks: [fn],
                    args: []
                };
            } else {
                cache[id].callbacks.push(fn);
            }
            if (cache[id].args.length > 0) {
                for (var i = 0, ilength = cache[id].callbacks.length; i < ilength; i++) {
                    fn.apply(this, cache[id].args[i]);
                }
            }

        },
        unsub: function (id, fn) {
            /*
            * We want to make sure that an ID is provided before
            * un-subscribing. Also, we will assume that if the
            * call back function is nor provided that we will empty
            * the cache for that particular key.
            * */
            if (id) {
                if (!fn) {
                    cache[id] = {
                        callbacks: [fn],
                        args: []
                    };
                } else {
                    var fnIndex = cache[id].indexOf(fn);
                    if (fnIndex > -1 ){
                        cache[id].callbacks.splice(fnIndex, 1);
                    }
                }
            }
        }
    };
});
