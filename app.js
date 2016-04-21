angular.module('myApp', ['ngRoute'])

.config(function($routeProvider){
  $routeProvider.when("/",{
      templateUrl: "partials/home.html",
      controller: "HomeCtrl"
    }).when("/analytics",{
	  templateUrl: "partials/dashboard.html",
      controller: "AnalyticsCtrl"
  }).when("/tryme",{
	  templateUrl: "partials/tryMe.html",
      controller: "TryMeCtrl"
  })
})
.controller('HomeCtrl', ['$scope', '$http', function($scope, $http){
	console.log("HomeCtrl");
}])
.controller('AnalyticsCtrl', ['$scope', '$http', function($scope, $http){
	console.log("AnalyticsCtrl");
}])
.controller('TryMeCtrl', ['$scope', '$http', function($scope, $http){
	console.log("TryMeCtrl");
}]);
