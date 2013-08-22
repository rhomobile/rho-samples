KitchenSink.Samples.Keystate = KitchenSink.Samples.Keystate || (function() {

	  function show_keystates(params) {
	    Rho.KeyState.showStates(params);
	  }

	  function show_keystates_top() {
	    var margin = 10;
	    var height = 20;
	    var width = 20;
	    var right = Rho.System.screenWidth - margin;
	        
	    show_keystates( {
	      top : margin,
	      right : right,
	      width : width,
	      height : height
	    }); 
	    
	  }
	  
	  function show_keystates_bottom() {
	    var margin = 10;
	    var height = 20;
	    var width = 20;
	    var top = Rho.System.screenHeight - margin - height;
	    var right = Rho.System.screenWidth - margin;
	    
	    show_keystates( {
	      top : top,
	      right : right,
	      width : width,
	      height : height,
	    });
	  }
	  
	return {
		show_keystates_top : show_keystates_top,
		show_keystates_bottom : show_keystates_bottom
	};

})();