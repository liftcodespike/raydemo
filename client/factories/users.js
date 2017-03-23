app.factory('userFactory', function($http){
	var factory = {};
	factory.getUsers = function(cb){
		$http.get('/getusers').then(function(output){
			cb(output.data)
		})
	}
	return factory
})