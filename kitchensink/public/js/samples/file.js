KitchenSink.Samples.File = KitchenSink.Samples.File || (function() {

	function generate_ul(entries, link_base) {
		var result = "";

		if (link_base) {
			var level_up = '<li><a href="#" data-role="button" class="filesample folder" data-path="' + escape(Rho.RhoFile.dirname(link_base)) + '">[One level up]</a></li>';
			result += level_up;
		}

		for (var i = 0; i < entries.length; i++) {
			var entry = entries[i];

			var element = entry;

			if (link_base) {
				element = '<a href="#" data-role="button" class="filesample folder" data-path="' + escape(Rho.RhoFile.join(link_base, entry)) + '">' + element + '</a>';
			}

			element = "<li>" + element + "</li>";

			result += element;
		}


		return result;
	}

	function browse_filesystem(start_from_path) {
		start_from_path = start_from_path || Rho.Application.appsBundleFolder;
		var folders = [];
		var files = [];

		// TODO: move from RhoFile to File when implemented
		var entries = Rho.RhoFile.listDir(start_from_path);

		for (var i = 0; i < entries.length; i++) {
			var entry = entries[i];
			if ( (entry != ".") && (entry != "..")) {

				(Rho.RhoFile.isDir(Rho.RhoFile.join(start_from_path, entry)) ? folders : files).push(entry);
			}
		}

		var folders_ul = generate_ul(folders, start_from_path);
		var files_ul = generate_ul(files);

		var folders_ui_element = $("div[data-role=page].filesample .sample.javascript .folders");
		var files_ui_element = $("div[data-role=page].filesample .sample.javascript .files");

		folders_ui_element.html(folders_ul).trigger("create");
		files_ui_element.html(files_ul).trigger("create");
	}

	$(function() {
		$(document).on("click", "a.filesample.folder", function() {
				var path = unescape($(this).data("path"));
				KitchenSink.Samples.File.browse_filesystem(path);
			});
	});

	return {
		browse_filesystem: browse_filesystem
	};

})();