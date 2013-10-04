KitchenSink.Samples.Application = KitchenSink.Samples.Application || (function($, KitchenSink) {

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
		quit_app: quit_app,
		minimize_app: minimize_app,
		restore_app: restore_app
	};

})(jQuery, KitchenSink);