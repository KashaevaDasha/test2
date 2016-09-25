//var HelloCtrl = function() {
//alert('hello');
//}
(function() {
	var HelloCtrl = function($scope) {
		$scope.getName = function() {
			return $scope.name;
		}
	}
})();