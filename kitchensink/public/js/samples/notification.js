KitchenSink.Samples.Notification = KitchenSink.Samples.Notification || (function() {

	function beep() {
	    Rho.Notification.beep({
	        frequency : 40000,
	        volume : 1,
	        duration : 2000
	      })
	}
	
	function popup() {
	    Rho.Notification.showPopup({
	        message : "Hello, world!",
	        title : "Greeting",
	        icon : "info",
	        buttons : ["Fine"]
	      });

	}
	
	function popup_with_multiple_buttons() {
	    Rho.Notification.showPopup({
	        message : "How are you feeling today?",
	        title : "Hey there",
	        icon : "question",
	        buttons : [
	          { id : "1",
	            title : "Amazing"
	          },
	          { id : "42",
	            title : "Super"
	          },
	          { id : "3",
	            title : "Great"
	          }
	          ]
	      },popup_callback);	
	}
	
	function popup_callback(params) {
	    Rho.Notification.showPopup({
	        message : "You clicked a button with id="+params.button_id+", index="+params.button_index+" and title="+params.button_title,
	        buttons : ["OK"]
	      });		
	}
	
	return {
		beep : beep,
		popup : popup,
		popup_with_multiple_buttons : popup_with_multiple_buttons
	};

})();