/**
 * Created by Jewel Mahanta (@lap00zza) on 10-08-2016.
 */

/* Define is a part of requireJS
   http://requirejs.org/docs/api.html#defdep

  DC = Douglas Crockford
  RMP = Revealing Module Pattern
* */
define(["jquery"], function (jQuery) {
    // Uses the object literal syntax
    
    return {
        profile: function (userName) {
            return jQuery.ajax({
                url: "https://api.github.com/users/" + userName,
                type: "GET",
                dataType: "json",
                contentType: "application/json"
            });
        }
    };
});
