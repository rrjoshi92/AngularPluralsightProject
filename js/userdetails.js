(function () {

     var app = angular.module("githubViewer");

    var UserController = function ($scope,github, $routeParams) {

        var onUserComplete = function (data) {
            $scope.user = data;
            github.getrepos($scope.user).then(onRepos, onError);
        };

        var onError = function (reason) {
            $scope.error = "Could not fatch the data";
        };

        var onRepos = function (data) {
            $scope.repos = data;
        }           
        
        $scope.username = $routeParams.username;
        $scope.repoSortOrder = "-stargazers_count";
        github.getuser($scope.username).then(onUserComplete, onError);

        $('#sortdropdown li a').click(function () {            
            $scope.repoSortOrder = this.id;           
        })
    };

    app.controller("UserController", UserController);
    
    
}());
