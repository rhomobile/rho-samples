KitchenSink.Samples.Signature = KitchenSink.Samples.Signature || (function() {

	function signature_callback(params) {
		Rho.ScreenOrientation.normal();
		if (params["status"] == "ok") {
			alert("Signature captured");
			signature = params["imageUri"];
			if (signature.indexOf("data:image")!=0) {
				signature = Rho.Application.expandDatabaseBlobFilePath(signature);
			}
			update_signature(signature);
		} else {
			alert("Signature capture cancelled");
		}
	}
	
	function set_properties() {
		var selected_inputs = $(".ui-page-active .sample.javascript input[checked]");
		var properties = {};
		
		selected_inputs.each(function(index) {
			var input = $(selected_inputs[index]);
			properties[input.attr('name')] = input.val();
		});
		
		var change_orientation_checkbox = $(".ui-page-active .sample.javascript input[name=change_orientation]");
		if (change_orientation_checkbox.is(":checked")) {
			Rho.ScreenOrientation.upsideDown();
		}
		
		Rho.Signature.takeFullScreen(properties, signature_callback);
	}
	
    function update_signature(signature) { 
        $("#signature-image").attr('src',signature);
    }
    
    function capture_datauri() {
        Rho.Signature.takeFullScreen({outputFormat : "dataUri"}, signature_callback);
    }

    function capture_inline() {
        Rho.Signature.show({
            top : 0,
            left : 0,
            width : 320,
            height : Rho.System.screenHeight / 3,
            fullScreen: false,
          });
    }
    
    function capture_inline_docapture() {
    	Rho.Signature.capture(signature_callback);
    }
    
    function capture_inline_cancel() {
    	Rho.Signature.hide();
    }
    
	return {
		set_properties : set_properties,
		update_signature : update_signature,
		capture_datauri : capture_datauri,
		capture_inline : capture_inline,
		capture_inline_docapture : capture_inline_docapture,
		capture_inline_cancel : capture_inline_cancel
	};

})();