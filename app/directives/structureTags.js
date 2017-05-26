angular.module('structureTags', [])
	.directive('product', function() {

		var ddo = {};
		ddo.restrict = "AE";

		ddo.scope = {
			image:    '@',
			name:     '@',
			price:    '@',
			quantity: '@'
		}

		ddo.transclude = true;

		ddo.templateUrl = 'app/directives/product.html'

		return ddo;
	});