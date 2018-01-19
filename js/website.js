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
    })

    ;
});

app.config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('');
}]);
function MainCtrl($scope){

}