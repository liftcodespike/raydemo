app.factory('sessionFactory', function($http, $location){
	var factory = {}; 
	console.log($http)
	factory.login = function(user){
		$http.post('/login', user).then(function(output){
			if(output.data){
				$location.url('/dash')
			}
			console.log($http)
		})

	}

	factory.getUser =function(cb){
		$http.get('/getuser').then(function(output){
			if(!output.data){
				$location.url('/login')
			}else{
				cb(output.data)
			}
		})
	}
	return factory
})