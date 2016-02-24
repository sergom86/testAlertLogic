/*
 * Parameters Implementations
 *
 **/
 
//Route Search Actor TMDB
function getRouteSearhActor(query){
	route =  "http://api.themoviedb.org/3/search/person?" +
	getApiKey() +"&query="+query;
	
	return route;	
}

//Route Search Movies By IdActor TMDB
function getRouteSearhMovies(idActor){
	route = "http://api.themoviedb.org/3/person/"
	+ idActor + "/credits?" + getApiKey();
	
	return route;
}

//Route Image or Poster TMDB
function getRouteImages(){
	routeImage = "http://image.tmdb.org/t/p/w500";
	return routeImage;	
}

function getApiKey(){
	apiKey = "api_key=e08bfe20f451ae963db79e0bf738bb17";
	return apiKey;
}
