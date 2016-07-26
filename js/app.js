(function () {
  
    var app = angular.module("githubViewer", ["ngRoute"]);

  
    app.controller('errorController', function ($scope) { });
    app.config(function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider
                .when("angularProject/home", {
                    templateUrl: "tamplates/main.html",
                    controller: "MainController"
                })
             .when("angularProject/index", {
                 templateUrl: "tamplates/main.html",
                 controller: "MainController"
             })
            .when("angularProject/", {
                templateUrl: "tamplates/main.html",
                controller: "MainController"
            })
                .when("angularProject/user/:username", {
                    templateUrl: "tamplates/user.html",
                    controller: "UserController"
                })
            .when("angularProject/error", {
                templateUrl: "error.html",
                controller: "errorController"
            })
            
        .otherwise({
            redirectTo: "angularProject/error"
        });

    });
 
   
    

}());

