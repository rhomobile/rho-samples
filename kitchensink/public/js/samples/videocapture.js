KitchenSink.Samples.Videocapture = KitchenSink.Samples.Videocapture || (function() {

	function capture_video(){
		Rho.Videocapture.fileName = '/RhoVideoCapture';
    	Rho.Videocapture.duration = 60000;
    	Rho.Videocapture.start(save_captured_video);
	}

	function save_captured_video(params){
		alert("Video was saved in the " + params['fileName']);
	}

	function select_resolution(resolution){
		Rho.Videocapture.fileName = '/RhoVideoCapture';
    	Rho.Videocapture.resolution = resolution;
    	Rho.Videocapture.duration = 60000;
    	Rho.Videocapture.start(save_captured_video);
	}

	return {
		capture_video: capture_video,
		select_resolution: select_resolution
	};

})();