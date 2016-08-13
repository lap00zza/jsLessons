/**
 * Created by Jewel Mahanta (@lap00zza) on 11-08-2016.
 */
require.config({
    /*
     * RequireJS config block
     * */
    paths: {
        "angular": "../../bower_components/angular/angular.min",
        "jquery": "../../bower_components/jquery/dist/jquery.min",
        "semantic": "../../bower_components/semantic-ui/dist/semantic.min"
    },
    shim: {
        "angular": {
            exports: "angular"
        },
        "semantic": {
            exports: "semantic",
            deps: ["jquery"]
        }
    },
    packages: [{
        name: "moment",
        location: "../../bower_components/moment",
        main: "moment"
    }]
});
require(["jquery", "scripts_cart/bigCart.js", "scripts_cart/miniCart.js", "scripts_cart/productList.js"],
    function (jQuery, bigcart, minicart, productlist) {
        jQuery(document).ready(function () {
            bigcart.init();
            minicart.init();
            productlist.init();
        });
    });