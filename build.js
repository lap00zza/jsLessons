({
    /*
     * RequireJS config block
     * */
    baseUrl: "JavaScript Design Patterns/scripts_cart/",
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
    }],
    name: "main",
    out: "main-built.js"
})