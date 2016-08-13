/**
 * Created by Jewel Mahanta (@lap00zza) on 12-08-2016.
 */
"use strict";
define(["scripts_cart/pubSub.js", "jquery"], function (pubsub, jQuery) {
    var cartSize = 0,
        shoppingCartQuantity = 0;

    pubsub.sub("add-to-cart", function miniCartUpdate() {
        cartSize += 1;
        shoppingCartQuantity.text(cartSize);
    });

    pubsub.sub("remove-from-cart", function miniCartUpdate() {
        cartSize -= 1;
        shoppingCartQuantity.text(cartSize);
    });

    return {
        init: function () {
            shoppingCartQuantity = jQuery(".mini-shopping-cart-items");
        }
    };
});