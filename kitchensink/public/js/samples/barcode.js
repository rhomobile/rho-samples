KitchenSink.Samples.Barcode = KitchenSink.Samples.Barcode || (function() {

	var scanners;
	
    function scan_received(params) {
    	if (params["status"]=="ok") {
    		alert('Barcode scanning complete. Scanned barcode: '+params["barcode"]);
    	} else {
    		alert('Barcode scanning aborted');
    	}
    	Rho.Barcode.stop();
    }
    
    function scan_using_default_scanner() {
      Rho.Barcode.take({}, scan_received);
    }

    function scan_using_chosen_scanner(scanner_index) {
    	var scanner = scanners[scanner_index];
    	scanner.take({}, scan_received);
    }
    
    function enumerate_scanners() {
    	scanners = Rho.Barcode.enumerate();
    	
    	var scanner_elements = "";
    	
    	for (var i=0; i<scanners.length; i++) {
    		var scanner = scanners[i];
    		scanner_elements+="<a href='#' data-role='button' onclick='KitchenSink.Samples.Barcode.scan_using_chosen_scanner("+i+")'>"+scanner.friendlyName+"</a>";
    	}
    	$(".ui-page-active .sample.javascript .scanner_list").html(scanner_elements).trigger("create");
    }

    function _read_properties_from_form() {
    	var result={};
    	$.mobile.activePage.find("form input[type=radio]:checked").each(function() {
    		var element = $(this);
    		result[element.attr('name')] = element.val();
    	});
    	
    	return result;
    }

    function set_symbology() {
        // For the purpose of this example, let's say our application only needs to recognize one type of barcode.
        // In that case, we will disable all decoders...
        Rho.Barcode.allDecoders = false;
        // ... and enable only the one we are interested in:
        Rho.Barcode.upca = true;
        // All other barcode symbologies will be ignored
        this.scan_using_default_scanner();
    }
    
    function set_properties() {
      // assign properties
      var properties = _read_properties_from_form();
      Rho.Barcode.aimMode = properties["aimMode"];
      Rho.Barcode.aimType = properties["aimType"];
      Rho.Barcode.beamWidth = properties["beamWidth"];
      
      // invoke scanner to see the different settings at work
      this.scan_using_default_scanner();
    }


    function set_audible_options() {
    	var decodeVolume = $.mobile.activePage.find("input[name=decodeVolume]").val();
    	var decodeFrequency = $.mobile.activePage.find("input[name=decodeFrequency]").val();
    	var decodeDuration = $.mobile.activePage.find("input[name=decodeDuration]").val();
    	
    	Rho.Barcode.decodeVolume = decodeVolume;
    	Rho.Barcode.decodeFrequency = decodeFrequency;
    	Rho.Barcode.decodeDuration = decodeDuration;
    	
    	this.scan_using_default_scanner();
    }
    
    function update_scanner_result(message) {
    	var element = $(".ui-page-active .scanner_result");
    	element.html(message);
    }
    
	return {
		scan_using_default_scanner : scan_using_default_scanner,
		scan_using_chosen_scanner : scan_using_chosen_scanner,
		enumerate_scanners : enumerate_scanners,
        set_symbology : set_symbology,
		set_properties : set_properties,
		set_audible_options : set_audible_options,
		update_scanner_result : update_scanner_result
	};

})();