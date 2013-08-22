KitchenSink.Samples.Screenorientation = KitchenSink.Samples.Screenorientation || (function() {

	
	function toggle_autorotation() {
  	   Rho.ScreenOrientation.autoRotate=!Rho.ScreenOrientation.autoRotate;
	   var is_auto_rotate = Rho.ScreenOrientation.autoRotate;
	   alert("Is Screen Autorotated:" + is_auto_rotate)
	}
	
	function orientation_callback(params) {
		alert("The screen changed orientation. The new orientation is "+params);
	}
	
	function set_callback() {
		Rho.ScreenOrientation.setScreenOrientationEvent(orientation_callback);
	}
	
	function remove_callback() {
		Rho.ScreenOrientation.setScreenOrientationEvent(null);
	}
	
	function left_handed() {
		Rho.ScreenOrientation.leftHanded();
	}
	
    function right_handed() {
		Rho.ScreenOrientation.rightHanded();
	}
	
	function normal() {
		Rho.ScreenOrientation.normal();
	}
	
	function upside_down() {
		Rho.ScreenOrientation.upsideDown();
	}
	
	return {
		toggle_autorotation: toggle_autorotation,
		set_callback: set_callback,
		remove_callback : remove_callback,
		upside_down: upside_down,
		left_handed: left_handed,
		right_handed: right_handed,
		normal: normal
	};

})();