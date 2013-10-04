KitchenSink.Samples.Keystate = KitchenSink.Samples.Keystate || (function($, KitchenSink) {

	function show_keystates(params) {
		Rho.KeyState.showStates(params);
	}

	function show_keystates_top() {
		var margin = 40;
		var height = 25;
		var width = 25;
		var right = Rho.System.screenWidth - margin;

		show_keystates({
			top: margin,
			right: right,
			width: width,
			height: height
		});

	}

	function show_keystates_bottom() {
		var margin = 10;
		var height = 25;
		var width = 25;
		var top = Rho.System.screenHeight - margin - height;
		var right = Rho.System.screenWidth - margin;

		show_keystates({
			top: top,
			right: right,
			width: width,
			height: height,
		});
	}

	function hide_keystates() {
		Rho.KeyState.hideStates();
	}

	return {
		show_keystates_top: show_keystates_top,
		show_keystates_bottom: show_keystates_bottom,
		hide_keystates: hide_keystates
	};

})(jQuery, KitchenSink);