angular.module('myApp', ['ngRoute', 'angularFileUpload'])
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
    $http({
        method: 'GET',
        url: 'http://127.0.0.1:3008/getAnalytics'
    }).then(function successCallback(response) {
        console.log(response);
        // this callback will be called asynchronously
        // when the response is available
      }, function errorCallback(response) {
        console.log("error aaraha hai")
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    });

    $http.get('http://127.0.0.1:3008/getAnalytics', function(data){
        console.log("Inside analytics")
        console.log(data);
        $scope.statData = data;
    });
	console.log("AnalyticsCtrl");
}])
.controller('TryMeCtrl', ['$scope', 'FileUploader', function($scope, FileUploader) {
		console.log("TryMeCtrl");

        var uploader = $scope.uploader = new FileUploader({
            url: 'upload.php'
        });

        // FILTERS

        uploader.filters.push({
            name: 'imageFilter',
            fn: function(item /*{File|FileLikeObject}*/, options) {
                var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
                return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
            }
        });

        // CALLBACKS

        uploader.onWhenAddingFileFailed = function(item /*{File|FileLikeObject}*/, filter, options) {
            console.info('onWhenAddingFileFailed', item, filter, options);
        };
        uploader.onAfterAddingFile = function(fileItem) {
            console.info('onAfterAddingFile', fileItem);
        };
        uploader.onAfterAddingAll = function(addedFileItems) {
            console.info('onAfterAddingAll', addedFileItems);
        };
        uploader.onBeforeUploadItem = function(item) {
            console.info('onBeforeUploadItem', item);
        };
        uploader.onProgressItem = function(fileItem, progress) {
            console.info('onProgressItem', fileItem, progress);
        };
        uploader.onProgressAll = function(progress) {
            console.info('onProgressAll', progress);
        };
        uploader.onSuccessItem = function(fileItem, response, status, headers) {
            console.info('onSuccessItem', fileItem, response, status, headers);
        };
        uploader.onErrorItem = function(fileItem, response, status, headers) {
            console.info('onErrorItem', fileItem, response, status, headers);
        };
        uploader.onCancelItem = function(fileItem, response, status, headers) {
            console.info('onCancelItem', fileItem, response, status, headers);
        };
        uploader.onCompleteItem = function(fileItem, response, status, headers) {
            console.info('onCompleteItem', fileItem, response, status, headers);
        };
        uploader.onCompleteAll = function() {
            console.info('onCompleteAll');
        };

        console.info('uploader', uploader);
 }]);
