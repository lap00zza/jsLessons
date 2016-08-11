/**
 * Created by Jewel Mahanta (@lap00zza) on 10-08-2016.
 */

/* Define is a part of requireJS
   http://requirejs.org/docs/api.html#defdep
* */
define(["jquery"], function (jQuery) {
    // Uses the object literal syntax
    
    return {
        profile: function (userName) {
            return jQuery.get("https://api.github.com/users/" + userName);
        }
    };
});
