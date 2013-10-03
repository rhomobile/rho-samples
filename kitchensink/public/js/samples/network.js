KitchenSink.Samples.Network = KitchenSink.Samples.Network || (function($, KitchenSink) {

	function status_notify_callback(params) {
		alert("Network status changed from " + params.prev_status + " to " + params.current_status);
	}

	function start_status_notify() {
		// Request the system to check every 3 seconds and call us back if there is a change in network connectivity
		Rho.Network.startStatusNotify(3000, status_notify_callback);
		alert("Started requesting network availability notifications");
	}

	function stop_status_notify() {
		// Stop network status notifications
		Rho.Network.stopStatusNotify();
		alert("Stopped requesting network availability notifications");
	}

	function upload_file_callback(params) {
		// Check the result of the upload and act accordingly
		if (params.status == "ok") {
			alert("Upload Succeeded.");
		} else {
			alert("Upload Failed.");
		}
	}

	function upload_file() {
		if (Rho.Network.hasNetwork()) {
			// Upload the specified file using HTTP POST.
			uploadfileProps = {
				url: "http://www.example.com",
				filename: Rho.RhoFile.join(Rho.RhoFile.join(Rho.Application.publicFolder, "images"), "backButton.png"),
				body: "uploading file",
				fileContentType: "image/png"
			};

			Rho.Network.uploadFile(uploadfileProps, upload_file_callback);
		} else {
			alert("Network is not available");
		}
	}

	function download_file_callback(params) {
		if (params.status == "ok") {
			alert("Download Succeeded. File saved to " + Rho.RhoFile.join(Rho.Application.userFolder, "sample.png"));
		} else {
			alert("Download Failed");
		}
	}

	function download_file() {
		if (Rho.Network.hasNetwork()) {
			// Download a file to the specified filename. Be careful with the overwriteFile parameter!
			downloadfileProps = {
				url: "http://www.google.com/images/icons/product/chrome-48.png",
				filename: Rho.RhoFile.join(Rho.Application.userFolder, "sample.png"),
				overwriteFile: true
			};
			Rho.Network.downloadFile(downloadfileProps, download_file_callback);
		} else {
			alert("Network is not available");
		}
	}

	function network_availability() {
		// shows the network availability for...
		// Cell network
		var cell_network = Rho.Network.hasCellNetwork();
		// Wi-Fi network
		var wifi_network = Rho.Network.hasWifiNetwork();
		// Any network
		var network = Rho.Network.hasNetwork();

		alert("Cell network: " + cell_network + "\nWi-Fi network: " + wifi_network + "\nNetwork: " + network);
	}

	function basic_auth() {
		if (Rho.Network.hasNetwork()) {
			getProps = {
				url: "http://rhodes-basic-auth.herokuapp.com/secret.json",
				headers: { "Content-Type": "application/json" },
				authType: "basic",
				authUser: "test",
				authPassword: "test12345"
			};
			Rho.Network.get(getProps, auth_callback);
		} else {
			alert("Network is not available");
		}
	}

	function auth_callback(params) {
		alert(params.body);
	}

	function get() {
		if (Rho.Network.hasNetwork()) {
			getProps = {
				url: "http://www.apache.org/licenses/LICENSE-2.0",
				headers: { "Content-Type": "application/json" }
			};
			Rho.Network.get(getProps, get_callback);
		} else {
			alert("Network is not available");
		}

	}

	function get_callback(params) {
		if (params.status == "ok") {
			alert(params.body);
		} else {
			alert("GET request Failed");
		}
	}

	function post() {
		if (Rho.Network.hasNetwork()) {
			var body = '{"product" : {"name" : "test_name", "brand" : "test_brand", "sku" : "1" , "price" : "$2000" , "quantity" : "2" } }';
			postProps = {
				url: "http://rhostore.herokuapp.com/products.json",
				headers: { "Content-Type": "application/json" },
				body: body
			};
			Rho.Network.post(postProps, post_callback);
		} else {
			alert("Network is not available");
		}
	}

	function post_callback(params) {
		if (params.status == "ok") {
			alert("POST request Succeeded");
		} else {
			alert("POST request Failed");
		}
	}

	//Call ruby method via ajax
    function call_ruby_method_via_ajax(method_name){
    	$.get('/app/Network/'+method_name);
    }

	return {
		start_status_notify: start_status_notify,
		stop_status_notify: stop_status_notify,
		upload_file: upload_file,
		download_file: download_file,
		network_availability: network_availability,
		basic_auth: basic_auth,
		get: get,
		post: post,
		call_ruby_method_via_ajax: call_ruby_method_via_ajax
	};

})();