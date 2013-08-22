KitchenSink.Samples.Signal = KitchenSink.Samples.Signal || (function() {

 	function signal_status() {
 		var trigger_property =  _read_icon_layout_from_form();
 		var signal_values = Rho.SignalIndicators.wlanStatus();
 	    alert(
            "Signal strength: "+signal_values.signalStrength+
            "\nESS ID: "+signal_values.essid+
            "\nMacAddress: "+signal_values.macAddress+
            "\nAdapterName: "+signal_values.adapterName+
            "\nDHCP Server: "+signal_values.dhcpServer+
            "\nDHCP Static: "+signal_values.dhcpStatic+
            "\nGateway: "+signal_values.gateway+
            "\nIP Address: "+signal_values.ipAddress+
            "\nRSSI: "+signal_values.rssi+
            "\nSubnet Mask: "+signal_values.subnetMask+
            "\nWins: "+signal_values.wins
        );
 	}

 	function _read_icon_layout_from_form() {
    	var result={};
    	$.mobile.activePage.find("form input[type=radio]:checked").each(function() {
    		var element = $(this);
    		result[element.attr('name')] = element.val();
    	});
    	
    	return result;
    }

 	function show_signal_icon() {
 		var layout_property = _read_icon_layout_from_form();
 		Rho.SignalIndicators.showIcon({ color : '#FF0000' , layout : layout_property["iconLayout"] });
 	}

 	function hide_signal_icon() {
 		Rho.SignalIndicators.hideIcon()
 	}
	
	return {
		signal_status: signal_status,
		show_signal_icon: show_signal_icon,
		hide_signal_icon: hide_signal_icon
	};

})();