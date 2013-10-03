KitchenSink.Samples.Sensors = KitchenSink.Samples.Sensors || (function($, KitchenSink) {
	var accelerometer = "";
	function accelerometer_callback(params) {
		var activePage = KitchenSink.activePage();
		activePage.find(".accelerometer_x").text(params.accelerometer_x);
		activePage.find(".accelerometer_y").text(params.accelerometer_y);
		activePage.find(".accelerometer_z").text(params.accelerometer_z);
	}

	function start_accelerometer() {
		accelerometer = Rho.Sensor.makeSensorByType(Rho.Sensor.SENSOR_TYPE_ACCELEROMETER);
		if (accelerometer) {
			accelerometer.minimumGap = 1000;
			accelerometer.start(accelerometer_callback);
			alert("Started accelerometer");
		} else {
			alert("Device has not Accelerometer sensor");
		}

	}

	function stop_accelerometer() {
		if (accelerometer) {
			accelerometer.stop();
			alert("Stoped accelerometer");
		}
	}

	return {
		start_accelerometer: start_accelerometer,
		stop_accelerometer: stop_accelerometer,
		update_values: accelerometer_callback
	};

})(jQuery, KitchenSink);