/**
 * Created by Jewel Mahanta (@lap00zza) on 12-08-2016.
 */
"use strict";
define(["scripts_cart/pubSub.js", "jquery"], function (pubsub, jQuery) {
    /*
    * The idea behind this is that all the functionality should
    * be kept separate. So in this case, everything related to
    * shopping cart is separated from this module
    * */
    return {
        init: function () {
            /*
            * This means we are only concerned with the div
            * with the class shopItems. We are only going to
            * detect click events there instead of the whole
            * DOM
            * */
            var productSelector = jQuery(".shopItems");
            productSelector.on("click", "i", function () {
                var item = {
                    id: this,
                    name: jQuery(this).parents("div.item").find("a").text()
                };
                if (jQuery(this).hasClass("plus")) {
                    pubsub.pub("add-to-cart", item);
                    window.console.log("publish");
                    
                    jQuery(this)
                        .addClass("minus")
                        .removeClass("plus");

                } else if (jQuery(this).hasClass("minus")) {
                    pubsub.pub("remove-from-cart", item);
                    window.console.log("publish");

                    jQuery(this)
                        .addClass("plus")
                        .removeClass("minus");
                }
            });
        }
    };
});