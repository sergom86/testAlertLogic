/*
 * jQuery Implementations
 *
 **/

$(function() {
	
	/*
	//Set up the autocomplete jQuery - Plus
	*/
	$("#descActor").autocomplete({
		source : function(request, response) {
			$.ajax({
				type : "GET",
				contentType : "application/json; charset=utf-8",
				url : getRouteSearhActor(request.term),	
				success : function(data) {
					response(data.results);
					},
				error : function(data) { // error
					
				},
				headers : {
					'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
				}
			});

		},
		select : function(event, ui, scope) {
			
			$("#descActor").val(ui.item.name);
			$("#idActor").val(ui.item.id);
			
			// Solve the problem with dirty-values 
			var scope = angular.element($(document.body)).scope();
			scope.$apply(function(){
				scope.idActor = $("#idActor").val();
			});
			
			return false;
		}
	}).autocomplete("instance")._renderItem = function(ul, item) {
		return $("<li>").append("<a>" + item.name + "</a>").appendTo(ul);
	};

});
