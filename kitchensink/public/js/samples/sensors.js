KitchenSink.Samples.Sensors = KitchenSink.Samples.Sensors || (function() {
    var accelerometer = "";
	function accelerometer_callback(params) {
		$(".ui-page-active .accelerometer_x").text(params["accelerometer_x"]);
		$(".ui-page-active .accelerometer_y").text(params["accelerometer_y"]);
		$(".ui-page-active .accelerometer_z").text(params["accelerometer_z"]);
	}
	
	function start_accelerometer() {
		accelerometer = Rho.Sensor.makeSensorByType(Rho.Sensor.SENSOR_TYPE_ACCELEROMETER);
		if (accelerometer != null){
			accelerometer.minimumGap = 1000;
			accelerometer.start(accelerometer_callback);
			alert("Started accelerometer");
		}else{
			alert("Device has not Accelerometer sensor");
		}

	}
	
	function stop_accelerometer() {
		if (accelerometer != null){
			accelerometer.stop();
			alert("Stoped accelerometer");
		}
	}
	
	
	return {
		start_accelerometer : start_accelerometer,
		stop_accelerometer : stop_accelerometer
	};

})();