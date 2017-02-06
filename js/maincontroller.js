(function () {


    var app = angular.module("githubViewer");

    var MainController = function ($scope, $location, $window) {
        $scope.search = function (username) {
           // if (username) {
                // github.getuser(username);
                $location.path("/angularProject/user/" + username);
           // }           
        }
        $scope.goToPortfolio = function () {
            $window.location.href = "http://ravi.dev-tech.club/portfolio/";
        }
    };

    

    app.controller("MainController", MainController);

}());