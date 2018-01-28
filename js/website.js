import ('js/angular.js');
import ('https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js');

var app = angular.module("website", ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl : "partials/home.html"
        })
        .when("/contact", {
            templateUrl : "partials/contact.html"
        }).when("/OurMission", {
        templateUrl : "partials/OurMission.html"
    }).when("/", {
        templateUrl : "partials/home.html"
    }).when("/service", {
        templateUrl : "partials/service.html"
    }).when("/Facial", {
        templateUrl : "partials/Facial/Facial.html"
    }).when("/casmara", {
        templateUrl : "partials/Facial/casmara/Casmara.html"
    }).when("/Oxygeneo", {
        templateUrl : "partials/Facial/Oxygeneo/Oxygeneo.html"
    }).when("/Body", {
        templateUrl : "partials/Facial/bodytreatment/Body.html"
    })
    ;
    return $routeProvider;
});

app.config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('');
}]);


