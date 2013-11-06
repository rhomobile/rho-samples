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