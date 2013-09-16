var app = require('ballroom');
var rc = require('rhoconnect_helpers');
var Parse = require('parse').Parse; //npm install parse to install the Parse.com NPM package
var Store = rc.Store;
var Common = require('./common.js'); // We are adding this to keep 'common global variable we want to use'

app.controllerName('Application');

app.post('/login',
	{'rc_handler':'authenticate',
  'deprecated_route': {'verb': 'post', 'url': ['/application/clientlogin']}
	}, 
	function(req,resp){
		var login = req.params.login;
	  	var password = req.params.password;

	  	// We are using Parse.com as a backend for our user and model data
	  	// The Parse app_id and Javascript App key are kept in
	  	// controllers/js/common.js
	  	// These keys are generated when you register for an account with Parse.com
		Parse.initialize(Common.parse_app_id, Common.parse_key_js);

		//We will log into backend first to make sure the user is valid

	    Parse.User.logIn(login, password, {
	      success: function(user) {
  
				// Saving username/password to redis as simple key value pair
				// The password is available only during controller login, but we
				// need it for logging in for model queries. In production we would
				// want to encrypt this password
				var object = [login, password];
				resp.params = object;

				// Using Store API for simple storing of key/value pair to redis
				Store.putValue(resp, function(resp){
				  resp.send(true);
				});
	      },
	      error: function(user, error) {
	      	
	        resp.send(false);
	      }
	    });    

});

app.get('/rps_login',{'rc_handler':'rps_authenticate'}, function(req,resp){
  var login = req.params.login;
  var password = req.params.password;
  resp.send(true);
});
