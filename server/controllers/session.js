var mongoose = require('mongoose');
var User = mongoose.model('User')

module.exports = (function(){
return {
	login:function(req, res){
		User.findOne({name: req.body.name}, function(err, data){
			if(!data){
				var user = new User(req.body);
				user.save()	
			}else{
				var user = data
			}
			req.session.user = user
			req.session.user.save()
			return res.json(user)
		})
	},

	getUser: function(req, res){
		if(req.session.user){
			res.json(req.session.user)
		}else{
			res.json(null)
		}
	}, 
	logOut:function(req, res){
		req.session.destroy();
		res.redirect('/')
	},

	getUsers: function(req, res){
		User.find({}, function(err, users){
			res.json(users)
		})
	}
}
})()