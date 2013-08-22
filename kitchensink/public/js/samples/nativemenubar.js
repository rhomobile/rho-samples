KitchenSink.Samples.NativeMenubar = KitchenSink.Samples.NativeMenubar || (function() {

	function show_alert_1() {
		alert("This alert was invoked from a NativeMenubar item");
	}

	function show_alert_2() {
		alert("This is another alert, also called from the NativeMenubar");
	}
	
	function create_menuitems() {
		Rho.NativeMenubar.extraButton = {
			label : "Extra"
		};
		
	    Rho.NativeMenubar.extraMenu = [
	    {
	      label : "Show alert 1",
	      action : show_alert_1,
	    },
	    {
	      label : "Show alert 2",
	      action : show_alert_2,
	    },
	    {
	      label : "Win the lottery",
	      disabled : true // sorry! maybe in the next version. Pull requests welcome
	    }
	  ];
	
	  alert("Items added - check the app's left-key menu");
	}
	
	function remove_menuitems() {
		Rho.NativeMenubar.mainMenu = [];
	}
	
	return {
		create_menuitems: create_menuitems,
		remove_menuitems: remove_menuitems
	};
})();