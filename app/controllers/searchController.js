/*
 * Angular Controllers SearchByActor
 */
actorApp.controller('searchCtrl', function($scope, $http,NgTableParams) {		
	
	$scope.routeImages = getRouteImages();
	
	// Event to searh Movies By Actor
	$scope.searchByActor = function() {		
		var routeSearhMovies = getRouteSearhMovies($scope.idActor);
		
		$http.get(routeSearhMovies)
				.then(function(response) {
					$scope.movies = response.data.cast;	
					$scope.tableParams = new NgTableParams(
						{sorting: { release_date: 'asc'}},
						{ dataset: $scope.movies});
					});
	}	
});
