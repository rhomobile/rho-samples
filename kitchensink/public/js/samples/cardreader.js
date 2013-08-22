KitchenSink.Samples.CardReader = KitchenSink.Samples.CardReader || (function() {
    function cardreader_callback(params) {
        alert("Received data from card reader: "+params["data"]);
      }
      
      function connect() {
        Rho.CardReader.open(cardreader_callback);
      }
      
      function setProperties() {
        // Configure the MSR to output keystrokes instead of calling a function when a card is swiped
        // Note the absence of a callback parameter
        // Also, After emitting the keystrokes, automatically send a "Tab" keypress
        Rho.CardReader.autoTab = true;
        Rho.CardReader.open(cardreader_callback);

        Rho.CardReader.autoEnter = true;
        Rho.CardReader.open(cardreader_callback);
      }
	
	return {
		connect : connect,
		setProperties : setProperties
	};

})();