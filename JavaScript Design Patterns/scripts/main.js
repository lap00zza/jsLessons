/**
 * Created by Jewel Mahanta (@lap00zza) on 10-08-2016.
 */
require.config({
    /*RequireJS config block
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
require(["jquery", "api/github", "moment", "angular", "semantic"], function (jQuery, github, moment) {
    jQuery.fn.blinky = function (args) {
        "use strict";
        var opts = {
            frequency: 1000,
            count: -1
        };
        args = jQuery.extend(true, opts, args);
        var i = 0,
            that = this,
            dfd = jQuery.Deferred();

        function go() {
            if (that.length === 0) {
                return dfd.reject();
            }

            if (i === args.count) {
                return dfd.resolve("done");
            }
            i += 1;
            that.fadeOut(args.frequency / 2).fadeIn(args.frequency / 2);
            setTimeout(go(), args.frequency);
        }
        go();
        return dfd.promise();
    };
    jQuery(document).ready(function () {
        jQuery(".profile-image").dimmer({
            on: "hover"
        });

        jQuery(".githubUserName").keypress(function (event) {
            /* keyCode 13 is the code for enter key
             *  So, in short, we are using this to get the enter event
             *  from the input box
             * */
            if (event.keyCode === 13) {
                // using Semantic's dimmer before sending a request
                jQuery(".githubFetching").dimmer("show");

                var userNameSelector = jQuery(".githubUserName");
                // var request = github.profile(userName);
                // window.console.log(request);
                jQuery
                    .when(github.profile(userNameSelector.val()), userNameSelector.blinky({count: 2}))
                    .done(function (args) {
                        "use strict";
                        var response = args[0];
                            // status = args[1]
                            // xhr = args[2]

                        jQuery(".twitter-loader").css({"display": "block"});
                        jQuery(".profile-image").attr("src", response["avatar_url"]);
                        jQuery(".header").empty().append(response["login"]);
                        jQuery(".description").empty().append(response["bio"]);
                        jQuery(".date").empty().append("Joined on " + moment(response["created_at"]).format("MMM Do YYYY"));
                        jQuery(".followers").empty().append(response["followers"]);

                        // Once we get a response we stop the dimmer
                        jQuery(".githubFetching").dimmer("hide");
                    })
                    .fail(function () {
                        "use strict";
                        jQuery(".user-not-found").modal("show");
                        // alert(args.responseText);

                        // Once we get a response we stop the dimmer
                        jQuery(".githubFetching").dimmer("hide");
                    });
            }
        });
        jQuery(".tweets_load").click(function () {
            // using Semantic's dimmer before sending a request
            jQuery(".githubFetching").dimmer("show");

            var userNameSelector = jQuery(".githubUserName");
            // var request = github.profile(userName);
            // window.console.log(request);
            jQuery
                .when(github.profile(userNameSelector.val()), userNameSelector.blinky({count: 2}))
                .done(function (args) {
                    "use strict";
                    var response = args[0];
                        // status = args[1]
                        // xhr = args[2]

                    jQuery(".twitter-loader").css({"display": "block"});
                    jQuery(".profile-image").attr("src", response["avatar_url"]);
                    jQuery(".header").empty().append(response["login"]);
                    jQuery(".description").empty().append(response["bio"]);
                    jQuery(".date").empty().append("Joined on " + moment(response["created_at"]).format("MMM Do YYYY"));
                    jQuery(".followers").empty().append(response["followers"]);

                    // Once we get a response we stop the dimmer
                    jQuery(".githubFetching").dimmer("hide");
                })
                .fail(function () {
                    "use strict";
                    jQuery(".user-not-found").modal("show");
                    // alert(args.responseText);

                    // Once we get a response we stop the dimmer
                    jQuery(".githubFetching").dimmer("hide");
                });
        });
    });
});