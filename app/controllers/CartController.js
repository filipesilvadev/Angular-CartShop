App.controller('CartController', function($scope, $http){
	
	$scope.products = [];

	// var promise = $http.get('api.intercase.net.br/items.json');
	//Returns 404 Error

	var promise = $http.get('teste.json');

		promise.then(function(result){

			$scope.products = result.data;

		}).catch(function(error){
			console.log(error);
		});


	$scope.remove = function(index) {
		$scope.products.splice(index, 1);
	}

	

});
