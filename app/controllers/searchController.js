/*
 * Angular Controllers SearchByActor
 */
actorApp.controller('searchCtrl', function($scope, $http) {	

	$scope.routeImages = getRouteImages();
	
	// Event to searh Movies By Actor
	$scope.searchByActor = function() {		
		var routeSearhMovies = getRouteSearhMovies($scope.idActor);
		
		$http.get(routeSearhMovies)
				.then(function(response) {
					$scope.movies = response.data.cast;					
				});
	}	
});
