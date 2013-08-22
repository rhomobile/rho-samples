KitchenSink.Samples.Battery = KitchenSink.Samples.Battery || (function() {

 	function battery_status() {
 		var trigger_property =  _read_icon_layout_from_form();
 		var battery_values = Rho.Battery.batteryStatus({ trigger : trigger_property["trigger"]});
 		alert("AC Line Status:" + battery_values["acLineStatus"] + ", Battery Life Percent: "+ battery_values["batteryLifePercent"])
 	}

 	function _read_icon_layout_from_form() {
    	var result={};
    	$.mobile.activePage.find("form input[type=radio]:checked").each(function() {
    		var element = $(this);
    		result[element.attr('name')] = element.val();
    	});
    	
    	return result;
    }

 	function show_battery_icon() {
 		var layout_property = _read_icon_layout_from_form();
 		Rho.Battery.showIcon({ color : '#FF0000' , layout : layout_property["iconLayout"] });
 	}

 	function hide_battery_icon() {
 		Rho.Battery.hideIcon()
 	}
	
	return {
		battery_status: battery_status,
		show_battery_icon: show_battery_icon,
		hide_battery_icon: hide_battery_icon
	};

})();