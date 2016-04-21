angular.module('myApp', ['ngRoute'])

.config(function($routeProvider){
  $routeProvider.when("/",
    {
      templateUrl: "partials/home.html",
      controller: "HomeCtrl"
    }
  );
})



.controller('HomeCtrl', ['$scope', '$http', function($scope, $http){
	console.log("HomeCtrl");
}]);
