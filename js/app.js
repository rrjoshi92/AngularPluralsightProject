(function () {
  
    var app = angular.module("githubViewer", ["ngRoute"]);

  
    app.controller('errorController', function ($scope) { });
    app.config(function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider
                .when("/home", {
                    templateUrl: "tamplates/main.html",
                    controller: "MainController"
                })
             .when("/index", {
                 templateUrl: "tamplates/main.html",
                 controller: "MainController"
             })
            .when("/", {
                templateUrl: "tamplates/main.html",
                controller: "MainController"
            })
                .when("/user/:username", {
                    templateUrl: "tamplates/user.html",
                    controller: "UserController"
                })
            .when("/error", {
                templateUrl: "error.html",
                controller: "errorController"
            })
            
        .otherwise({
            redirectTo: "/error"
        });

    });
 
   
    

}());

