(function () {
  
    var app = angular.module("githubViewer", ["ngRoute"]);

  
    app.controller('errorController', function ($scope) { });
    app.config(function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider
                .when("/angularProject/home", {
                    templateUrl: "/angularProject/tamplates/main.html",
                    controller: "MainController"
                })
             .when("/angularProject/index", {
                 templateUrl: "/angularProject/tamplates/main.html",
                 controller: "MainController"
             })
               .when("/angularProject/index.html", {
                   templateUrl: "/angularProject/tamplates/main.html",
                   controller: "MainController"
               })
            .when("/angularProject", {
                templateUrl: "/angularProject/tamplates/main.html",
                controller: "MainController"
            })
                .when("/angularProject/user/:username", {
                    templateUrl: "/angularProject/tamplates/user.html",
                    controller: "UserController"
                })
            .when('/angularProject/portfolio', {
                redirectTo: function() {
                    window.location = 'http://ravi.dev-tech.club/portfolio/';
                }
            })
            .when("/angularProject/error", {
                templateUrl: "/angularProject/error.html",
                controller: "errorController"
            })

            
        .otherwise({
            redirectTo: "/angularProject/error"
        });
         
    });
 
   
    

}());

