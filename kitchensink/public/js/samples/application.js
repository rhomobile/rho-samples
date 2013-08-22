KitchenSink.Samples.Application = KitchenSink.Samples.Application || (function() {

	function app_folder() {
		// Get and show the various app folders
		var appFolder = Rho.Application.appBundleFolder;
		var appsBundleFolder = Rho.Application.appsBundleFolder;
		var databaseBlobFolder = Rho.Application.databaseBlobFolder;
		var publicFolder = Rho.Application.publicFolder;
		var userFolder = Rho.Application.userFolder;

		var message = "App bundle folder: " + appFolder + "\n" + "Apps bundle folder: " + appsBundleFolder + "\n" + "Database blob folder: " + databaseBlobFolder + "\n" + "Public folder: " + publicFolder + "\n" + "User folder: " + userFolder;

		alert(message);
	}

	function set_locale() {
		var previous_locale = Rho.Application.locale;
		Rho.Application.setLocale('de');
		var current_locale = Rho.Application.locale;
		alert("Old locale: "+old_locale+"\nCurrent locale: " + current_locale)
	}

	function quit_app() {
		Rho.Application.quit();
	}

	function minimize_app() {
		Rho.Application.minimize();
	}

	function restore_app() {
		Rho.Application.minimize();
		setTimeout(function() {
			Rho.Application.restore();
		}, 2000);
	}
	
	return {
		app_folder: app_folder,
		set_locale: set_locale,
		quit_app: quit_app,
		minimize_app: minimize_app,
		restore_app: restore_app
	};

})();