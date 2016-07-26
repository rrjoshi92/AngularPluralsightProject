(function () {


    var app = angular.module("githubViewer");

    var MainController = function ($scope, $location) {
        $scope.search = function (username) {
           // if (username) {
                // github.getuser(username);
                $location.path("/angularProject/user/" + username);
           // }           
        }        
    };

    

    app.controller("MainController", MainController);

}());