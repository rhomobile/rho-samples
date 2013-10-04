KitchenSink.Samples.Webview = KitchenSink.Samples.Webview || (function($, KitchenSink) {

	function getProperties() {

		var fullScreen = Rho.WebView.fullScreen;
		var currentURL = Rho.WebView.currentURL();
		var currentLocation = Rho.WebView.currentLocation();
		var message;
		if (Rho.System.platform == "ANDROID" || Rho.System.platform == "APPLE") {
			message = "CurrentURL: " + currentURL + "\n" + "Current Location: " + currentLocation + "\n" + "Full Screen: " + fullScreen;
		} else {
			message = "Current Location: " + currentLocation + "\n" + "Full Screen: " + fullScreen;
		}
		alert(message);
	}

	function toggleFullscreen() {
		Rho.WebView.fullScreen = !Rho.WebView.fullScreen;
	}

	function activeTab() {
		myvar = Rho.WebView.activeTab();
		alert(myvar);
	}

	function currentLocation() {
		myvar = Rho.WebView.currentLocation();
		alert(myvar);
	}

	function currentURL() {
		myvar = Rho.WebView.currentURL();
		alert(myvar);
	}

	function executeJavascript() {
		// this is merely an example showing feature parity between Ruby and Javascript APIs
		Rho.WebView.executeJavascript("alert('Test Alert');");
	}

	function navigate() {
		Rho.WebView.navigate("/app/Webview/set_properties");
	}

	function refresh() {
		Rho.WebView.refresh();
	}

	function savePage() {
		var filename = Rho.RhoFile.join(Rho.Application.userFolder, 'current_page.jpeg');
		Rho.WebView.save("jpeg", filename);
		alert("Current page was saved in the " + filename);
	}

	return {
		getProperties: getProperties,
		toggleFullscreen: toggleFullscreen,
		activeTab: activeTab,
		currentLocation: currentLocation,
		currentURL: currentURL,
		executeJavascript: executeJavascript,
		navigate: navigate,
		refresh: refresh,
		savePage: savePage
	};

})(jQuery, KitchenSink);