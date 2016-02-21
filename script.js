//http://www.gravatar.com/avatar/4208631e04a8ee7754febcb498a854f8
(function () {

  var app = angular.module("githubViewer", []);

  var MainController = function($scope,$http) {
  
  var onUserComplete= function(response){    
      $scope.user = response.data;
      $http.get($scope.user.repos_url)
          .then(onRepos, onError);
  };
  
  var onError = function(reason){
    $scope.error="Could not fatch the user";
  };

  var onRepos = function (response) {
      $scope.repos = response.data;
  }
  
  $http.get("https://api.github.com/users/rrjoshi92")
  .then(onUserComplete,onError);

  $scope.search = function (username) {
      $http.get("https://api.github.com/users/"+username)
          .then(onUserComplete, onError)
  }
    
  $scope.username = "angular";
  $scope.message="GitHub Viewer";
  };

  app.controller("MainController",["$scope","$http", MainController]);

}());