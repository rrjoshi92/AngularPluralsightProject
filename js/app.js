(function () {
  
    var app = angular.module("githubViewer", ["ngRoute"]);

  
    app.controller('errorController', function ($scope) { });
    app.config(function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider
                .when("angulerProject/home", {
                    templateUrl: "tamplates/main.html",
                    controller: "MainController"
                })
             .when("angulerProject/index", {
                 templateUrl: "tamplates/main.html",
                 controller: "MainController"
             })
            .when("angulerProject/", {
                templateUrl: "tamplates/main.html",
                controller: "MainController"
            })
                .when("angulerProject/user/:username", {
                    templateUrl: "tamplates/user.html",
                    controller: "UserController"
                })
            .when("angulerProject/error", {
                templateUrl: "error.html",
                controller: "errorController"
            })
            
        .otherwise({
            redirectTo: "angulerProject/error"
        });

    });
 
   
    

}());

