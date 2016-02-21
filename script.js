
(function () {

    var app = angular.module("githubViewer", []);

    var MainController = function ($scope, $http, $interval) {

        var onUserComplete = function (response) {
            $scope.user = response.data;
            $http.get($scope.user.repos_url)
                .then(onRepos, onError);
        };

        var onError = function (reason) {
            $scope.error = "Could not fatch the data";
        };

        var onRepos = function (response) {
            $scope.repos = response.data;
        }


        var decrementCountdown = function () {
            $scope.countdown -= 1;
            if ($scope.countdown < 1) {
                $scope.search($scope.username);
            }
        }
        var startcountdown = function() {
            $interval(decrementCountdown,1000, $scope.countdown);
        }

        $scope.search = function (username) {
            if (username) {
                $http.get("https://api.github.com/users/" + username)
                    .then(onUserComplete, onError)
            }
        }


        $scope.message = "GitHub Viewer";
        $scope.repoSortOrder = "-stargazers_count"
        $scope.countdown = 5;
        startcountdown();
    };

    app.controller("MainController", MainController);

}());