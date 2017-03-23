app.controller('sessionController', function($scope, sessionFactory){
	$scope.errors = []
	$scope.curUser = null;
	sessionFactory.getUser(function(data){
		$scope.curUser = data;
		console.log(data)
	})
	$scope.login = function(){
		$scope.errors = []
		if(!$scope.logReg || !$scope.logReg.name){
			$scope.errors.push('Please enter your name.')
		}else if( $scope.logReg.name.length < 3){
			$scope.errors.push('Your name is too short.')
		}else if($scope.logReg.name.length > 8){
			$scope.errors.push('Your name is too long.')
		}else{
			sessionFactory.login($scope.logReg)
		}
	}
})