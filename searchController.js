var app = angular.module('myApp', []);

app.controller('searchCtrl', function($scope, $http) {
	 $scope.searchByActor = function() {
		 
		 getMoviesByActName();
		 //$scope.message = 'Click!' + $scope.in_actor;
	 }
	 
	 var getMoviesByActName = function() {
		 $http.get("https://api.themoviedb.org/3/movie/550?api_key=e08bfe20f451ae963db79e0bf738bb17&query="+$scope.in_actor)
		    .then(function(response) {
		        $scope.message = response.data;
		    });		 
	 }
});