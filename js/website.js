import ('js/angular.js');
import ('https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js');

var app = angular.module("website", ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "partials/home.html"
        })
        .when("/contact", {
            templateUrl : "partials/contact.html"
        })

    ;
});

function MainCtrl($scope){

}