App.IndexView = Ember.View.extend({
	  didInsertElement: function() {
	    this._super();
	    this.$('.login-alert').hide();
	    this.$('#menuLogout').hide();
		if(Rho.ORM.haveLocalChanges()){
			this.$('.login-alert').show();
			this.$('.login-alert').html('<div><i class="pull-left icon icon-warning-sign icon-large"></i><strong>Local Changes Not Synced:</strong></div><div>There are local changes from the previous user <strong>(' + Rho.RhoConnectClient.userName + ')</strong> that have not been synced to the backend. Logging in as another user will erase all of those changes.</div>');
		}

	    console.log('AppInit');
	  }

});

App.IndexController = Ember.ArrayController.extend({
  actions: {
	  login: function(){
	  		controller = this;						
	  		Parse.initialize(parse_config.app_id, parse_config.key_js);
	  		console.log($('#login').val(), $('#password').val());
			Parse.User.logIn($('#login').val(), $('#password').val(), {
		      success: function(user) {
		      	startpage = '/app/Report';
		      	if(Rho.RhoConnectClient.userName != $('#login').val())
		      	{
		      		startpage = '/app/Sync'; //change of user wil wipe the db need to sync
		      	}
				Rho.RhoConnectClient.login($('#login').val(),$('#password').val(), function(e){
					console.log('LOgin Callback');
					console.log(e);
					if(e.error_code == "0")
					{
					    $('#menuLogout').show();
					 	$('#menuLogout').html('<a href=""><i class="icon-key icon-large icon-primary"></i> ' + Rho.RhoConnectClient.userName + '- Logout</a>');
						controller.transitionToRoute('reports');

					}
					else
					{
						$('.login-alert').html('<div><i class="pull-left icon icon-warning-sign icon-large"></i><strong>RhoConnect Login Error</strong>: </div>' + e.error_message + ' Try again or <strong>Select Reports</strong> from the menu to continue as last logged in user');
		      			$('.login-alert').show();	
					}

				});
				
		      },
		      error: function(user, error) {
		      	console.log(user);
				$('.login-alert').html('<div><i class="pull-left icon icon-warning-sign icon-large"></i><strong>Could not log into backend</strong>: </div>' + error.message + ' Try again or <strong>Select Reports</strong> from the menu to continue as last logged in user.');
		      	$('.login-alert').show();

		      }
		    });
    
		

	  }

  }
});


App.RegisterController = Ember.ObjectController.extend({
  actions: {
	  register: function(){
	  	Parse.initialize(parse_config.app_id, parse_config.key_js);
    
		var bOkToRegister = true;
		if($('#login-register').val() == '')
		{
			$('#login-register').parent().addClass('has-error');
			bOkToRegister = false;
		}
		else
		{
			$('#login-register').parent().removeClass('has-error');
		}
		if($('#password-register').val() == '')
		{
			$('#password-register').parent().addClass('has-error');
			bOkToRegister = false;
		}
		else
		{
			$('#password-register').parent().removeClass('has-error');
			if($('#password-register').val() != $('#password-confirm').val())
			{
				$('#password-register').parent().addClass('has-error');
				$('#password-confirm').parent().addClass('has-error');
				bOkToRegister = false;
			}
			else
			{
				$('#password-register').parent().removeClass('has-error');
				$('#password-confirm').parent().removeClass('has-error');
			}
		}
		
		if(bOkToRegister)
		{
			var user = new Parse.User();
			user.set("username", $('#login-register').val());
			user.set("password", $('#password-register').val());
			user.set("email", $('#email-register').val());
			console.log(user); 
			 
			user.signUp(null, {
			  success: function(user) {
			  	// Password reset request was sent successfully
			    $('.register-alert').addClass('alert-success');
			    $('.register-alert').html('Your account has been created successfully. Click the Cancel button and then login using the username and pasword provided.');
			    $('.register-alert').show();
			    
		
			  },
			  error: function(user, error) {
			    
			    $('.register-alert').addClass('alert-danger');
			    $('.register-alert').html("Error: " + error.code + " " + error.message);
			    $('.register-alert').show();
			  }
			});			
		}

	  }

  }
});


App.ForgotController = Ember.ObjectController.extend({
  actions: {
	  forgot: function(){
	  	Parse.initialize(parse_config.app_id, parse_config.key_js);
		userEmail = $('#forgot-email').val();
		Parse.User.requestPasswordReset(userEmail, {
		  success: function() {
		  	// Password reset request was sent successfully
		    $('.forgot-alert').addClass('alert-success');
		    $('.forgot-alert').html('Your password has been reset and you should receive an email with instructions for resetting. After it has been reset you may login');
		    $('.forgot-alert').show();
		    
		  },
		  error: function(error) {
		  	
		    $('.forgot-alert').addClass('alert-danger');
		    $('.forgot-alert').html("Error: " + error.code + " " + error.message);
		    $('.forgot-alert').show();

		    
		  }
		});
    

	  }

  }
});