var app = require('ballroom');
var rc = require('rhoconnect_helpers');
var Store = rc.Store;

app.controllerName('Application');

app.post('/login',
	{'rc_handler':'authenticate',
  'deprecated_route': {'verb': 'post', 'url': ['/application/clientlogin']}
	}, 
	function(req,resp){
  var login = req.params.login;
  var password = req.params.password;
  resp.send(true);
	// var object = {};
	// 			object[login] = password;
	// 			console.log('login object:' + JSON.stringify(object));
	// 			resp.params = object;

	// 			Store.putValue(resp, function(){
	// 				console.log('SAVED OBJECT');
	// 			  resp.send(true);
	// 			});

	// Parse.initialize("3zvw9xgwWsaTqF3LyJD7TIoEySn5rgUJkMSxkMRI", "ghqCxF1bVtNCl4oxUAMqovHtD5WRPJoEZ0YWxXoX");

	   //  Parse.User.logIn(login, password, {
	   //    success: function(user) {
				// console.log('login RESP:' + JSON.stringify(resp));
				// console.log('saving user in redis'+login+':'+password);
				// var object = {};
				// object[login] = password;
				// console.log('login object:' + JSON.stringify(object));
				// resp.params = object;

				// Store.putValue(resp, function(){
				// 	console.log('SAVED OBJECT');
				//   resp.send(true);
				// });



	      	
	    //   },
	    //   error: function(user, error) {
	    //   	console.log(error.message);
	    //     resp.send(false);
	    //   }
	    // });    

});

app.get('/rps_login',{'rc_handler':'rps_authenticate'}, function(req,resp){
  var login = req.params.login;
  var password = req.params.password;
  resp.send(true);
});
