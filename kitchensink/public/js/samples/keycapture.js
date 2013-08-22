KitchenSink.Samples.Keycapture = KitchenSink.Samples.Keycapture || (function() {

	  function start_keycapture() {
	  	Rho.KeyCapture.captureKey(false,"ALL",keycapture_callback);
	  }

	  function stop_keycapture() {
	  	Rho.KeyCapture.captureKey(false,"ALL",null);
	  }
	  
	  function keycapture_callback(params) {
		  alert("Captured key: "+params["keyValue"]);
	  }

	  
	return {
		start_keycapture : start_keycapture,
		stop_keycapture : stop_keycapture
	};

})();