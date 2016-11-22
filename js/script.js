

/// <reference path="angular.js" />

var app = angular.module("computer", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/main", {
        templateUrl: "main.html",
        controller: "MainCtrl"
    })
    .when("/about", {
        templateUrl: "about.html",
        controller: "AboutCtrl"
    })
    .when("/services", {
        templateUrl : "services.html",
        controller: "ServicesCtrl"
    })
    .when("/contact", {
        templateUrl: "contact.html",
        controller: "ContactCtrl"
    }).
    otherwise({
        redirectTo: '/main'
    });
});

app.controller('MainCtrl',function($scope)
{

});
app.controller('ServicesCtrl', function ($scope, $http) {
    $http.get('services.json').success(function (data) {
        $scope.services = data;
    });
});
app.controller('ContactCtrl', function ($scope,$http) {

    $http.get('location.json').success(function (data) {
        $scope.location = data;
    });
    

});
  
