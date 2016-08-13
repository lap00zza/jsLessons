/**
 * Created by Jewel Mahanta (@lap00zza) on 12-08-2016.
 */

"use strict";
define(["scripts_cart/pubSub.js", "jquery"], function (pubsub, jQuery) {
    var cartSize = 0,
        productList = jQuery(".shoppingList ul"),
        shoppingCartQuantity = 0;

    pubsub.sub("add-to-cart", function bigCartUpdate(item) {
        cartSize += 1;
        shoppingCartQuantity.text(cartSize);
        var li = jQuery("<li />")
                    .text(item.name)
                    .data("key", item.id);
        productList.append(li);
    });
    
    pubsub.sub("remove-from-cart", function bigCartUpdate(item) {
        cartSize -= 1;
        shoppingCartQuantity.text(cartSize);
        productList.find("li").filter(function () {
            return jQuery(this).data("key") == item.id;
        }).remove();
    });

    return {
        init: function () {
            shoppingCartQuantity = jQuery(".big-shopping-cart-items");
        }
    };
});