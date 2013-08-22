KitchenSink.Samples.NativeToolbar = KitchenSink.Samples.NativeToolbar || (function() {

	function getActionUrls() {
		var links = $(".ui-page-active").find(".toolbarurls > a");
		var urls = [];
		links.each(function(index) {
			urls.push($(links[index]).attr("href"));
		});
		
		return urls;
	}

	function createToolbar() {
		var urls = getActionUrls();
		Rho.NativeToolbar.create([{
				label: "Home",
				action: urls[0]
			}, {
				label: "Show alert",
				action: urls[1]
			}, {
				label: "Remove",
				action: urls[2]
			}], {})
	}


	function removeToolbar() { 
		Rho.NativeToolbar.remove();
	}

	return {
		createToolbar: createToolbar,
		removeToolbar: removeToolbar
	};
})();