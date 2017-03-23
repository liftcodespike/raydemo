var express = require('express');
var app = express();
var path = require('path');
var bp = require('body-parser');
var session = require('express-session');
app.use(express.static(path.join(__dirname, '/client')));
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
}))
app.use(bp.json());
require('./server/config/mongoose.js')
require('./server/config/routes.js')(app);
app.listen(8000, function(){
	console.log('Omg jack is the coolest teacher ever.')
})