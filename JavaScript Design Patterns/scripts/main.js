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
    jQuery(document).ready(function () {
        jQuery(".image").dimmer({
            on: "hover"
        });
        jQuery(".githubUserName").keypress(function (event) {
            /* keyCode 13 is the code for enter key
            *  So, in short, we are using this to get the enter event
            *  from the input box
            * */
            if (event.keyCode === 13 ) {
                // using Semantic's dimmer before sending a request
                jQuery(".githubFetching").dimmer("show");

                var userName = jQuery(".githubUserName").val();
                var request = github.profile(userName);
                window.console.log(request);
                request.done(function (response, status, xhr) {
                    "use strict";
                    window.console.log(xhr.status, response);
                    jQuery(".twitter-loader").css({"display": "block"});
                    jQuery(".profile-image").attr("src", response["avatar_url"]);
                    jQuery(".header").empty().append(response["login"]);
                    jQuery(".description").empty().append(response["bio"]);
                    jQuery(".date").empty().append("Joined on " + moment(response["created_at"]).format("MMM Do YYYY"));
                    jQuery(".followers").empty().append(response["followers"]);

                    // Once we get a response we stop the dimmer
                    jQuery(".githubFetching").dimmer("hide");

                    /*for (var propertyName in response){
                     if (response.hasOwnProperty(propertyName)) {
                     jQuery("#twitter-loader").append(propertyName + " : "+response[propertyName] + "<br>");
                     }*/
                });
                request.fail(function (response) {
                    alert(response.responseText);

                    // Once we get a response we stop the dimmer
                    jQuery(".githubFetching").dimmer("hide");
                });
            }
        });
        jQuery(".tweets_load").click(function () {
            // using Semantic's dimmer before sending a request
            jQuery(".githubFetching").dimmer("show");

            var userName = jQuery(".githubUserName").val();
            var request = github.profile(userName);
            window.console.log(request);
            request.done(function (response, status, xhr) {
                "use strict";
                window.console.log(xhr.status, response);
                jQuery(".twitter-loader").css({"display": "block"});
                jQuery(".profile-image").attr("src", response["avatar_url"]);
                jQuery(".header").empty().append(response["login"]);
                jQuery(".description").empty().append(response["bio"]);
                jQuery(".date").empty().append("Joined on " + moment(response["created_at"]).format("MMM Do YYYY"));
                jQuery(".followers").empty().append(response["followers"]);

                // Once we get a response we stop the dimmer
                jQuery(".githubFetching").dimmer("hide");

                /*for (var propertyName in response){
                 if (response.hasOwnProperty(propertyName)) {
                 jQuery("#twitter-loader").append(propertyName + " : "+response[propertyName] + "<br>");
                 }*/
            });
            request.fail(function (response) {
                alert(response.responseText);

                // Once we get a response we stop the dimmer
                jQuery(".githubFetching").dimmer("hide");
            });
        });
    });
});