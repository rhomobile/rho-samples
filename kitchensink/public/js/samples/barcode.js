KitchenSink.Samples.Barcode = KitchenSink.Samples.Barcode || (function($,KitchenSink) {

	var scanners;

	function scan_received(params) {
		if (params.status == "ok") {
			alert('Barcode scanning complete. Scanned barcode: ' + params.barcode);
		} else {
			alert('Barcode scanning aborted');
		}
		Rho.Barcode.stop();
	}

	function scan_using_default_scanner() {
		Rho.Barcode.take({ }, scan_received);
	}

	function scan_using_chosen_scanner(scanner_index) {
		var scanner = scanners[scanner_index];
		scanner.take({ }, scan_received);
	}

	function enumerate_scanners() {
		scanners = Rho.Barcode.enumerate();

		var scanner_elements = "";

		for (var i = 0; i < scanners.length; i++) {
			var scanner = scanners[i];
			scanner_elements += "<a href='#' data-role='button' onclick='KitchenSink.Samples.Barcode.scan_using_chosen_scanner(" + i + ")'>" + (scanner.friendlyName || scanner.scannerType) + "</a>";
		}
		KitchenSink.find(".sample.javascript .scanner_list").html(scanner_elements).trigger("create");
	}

	function _read_properties_from_form() {
		var result = { };
		KitchenSink.activePage.find("form input[type=radio]:checked").each(function() {
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
		var params = _read_properties_from_form();
		if(params.symbology == "upca"){
			Rho.Barcode.upca = true;
		}else if(params.symbology == "code128"){
			Rho.Barcode.code128 = true;
		}else{
			Rho.Barcode.qrCode = true;
		}
		// All other barcode symbologies will be ignored
		this.scan_using_default_scanner();
	}

	function supported_properties() {
		// assign properties
		var properties = Rho.Barcode.getSupportedProperties();
		var elements = "";

		for (var i = 0; i < properties.length; i++) {
			var property = properties[i];
			elements += "<li>" + property + "</li>";
		}

		KitchenSink.find(".supported_properties").html(elements);
	}

	function set_audible_options() {
		var decodeVolume = KitchenSink.activePage.find("input[name=decodeVolume]").val();
		var decodeFrequency = KitchenSink.activePage.find("input[name=decodeFrequency]").val();
		var decodeDuration = KitchenSink.activePage.find("input[name=decodeDuration]").val();

		Rho.Barcode.decodeVolume = decodeVolume;
		Rho.Barcode.decodeFrequency = decodeFrequency;
		Rho.Barcode.decodeDuration = decodeDuration;

		this.scan_using_default_scanner();
	}

	function update_scanner_result(message) {
		var element = KitchenSink.activePage().find(".scanner_result");
		element.html(message);
	}

	//Call ruby method via ajax
	function scan_using_default_scanner_with_ruby() {
		$.get('/app/Barcode/scan_using_default_scanner');
	}

	function set_symbology_with_ruby() {
		var params = _read_properties_from_form();
		$.get('/app/Barcode/set_symbology', { symbology: params.symbology });
	}

	function scan_with_ruby(scanner_index) {
		$.get('/app/Barcode/scan_using_chosen_scanner', { scanner_index: scanner_index });
	}

	function set_audible_options_with_ruby() {
		var decodeVolume = KitchenSink.activePage().find("input[name=decodeVolume]").val();
		var decodeFrequency = KitchenSink.activePage().find("input[name=decodeFrequency]").val();
		var decodeDuration = KitchenSink.activePage().find("input[name=decodeDuration]").val();
		$.get('/app/Barcode/set_audible_options', { decodeVolume: decodeVolume, decodeFrequency: decodeFrequency, decodeDuration: decodeDuration });
	}

	return {
		scan_using_default_scanner: scan_using_default_scanner,
		scan_using_chosen_scanner: scan_using_chosen_scanner,
		enumerate_scanners: enumerate_scanners,
		set_symbology: set_symbology,
		supported_properties: supported_properties,
		set_audible_options: set_audible_options,
		update_scanner_result: update_scanner_result,
		scan_using_default_scanner_with_ruby: scan_using_default_scanner_with_ruby,
		set_symbology_with_ruby: set_symbology_with_ruby,
		scan_with_ruby: scan_with_ruby,
		set_audible_options_with_ruby: set_audible_options_with_ruby
	};

})(jQuery,KitchenSink);
