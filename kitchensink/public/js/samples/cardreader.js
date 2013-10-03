KitchenSink.Samples.CardReader = KitchenSink.Samples.CardReader || (function($, KitchenSink) {

	function cardreader_callback(params) {
		alert("Received data from card reader: " + params.data);
	}

	function connect() {
		Rho.CardReader.open(cardreader_callback);
	}

	function _read_properties_from_form() {
		var result = { };
		KitchenSink.activePage().find("form input[type=radio]:checked").each(function() {
			var element = $(this);
			result[element.attr('name')] = element.val();
		});

		return result;
	}

	function setProperties() {
		// Configure the MSR to output keystrokes instead of calling a function when a card is swiped
		// Note the absence of a callback parameter
		var card_reader_property = _read_properties_from_form();
		if (card_reader_property.property == "autoTab") {
			Rho.CardReader.autoTab = true;
		} else {
			Rho.CardReader.autoEnter = true;
		}
		Rho.CardReader.open(cardreader_callback);
	}

	return {
		connect: connect,
		setProperties: setProperties
	};

})(jQuery, KitchenSink);