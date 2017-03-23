app.controller('usersController', function($scope, userFactory){
	$scope.users = [];
	userFactory.getUsers(function(data){
		$scope.users = data
	})
})