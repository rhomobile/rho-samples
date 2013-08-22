KitchenSink.Samples.NativeTabbar = KitchenSink.Samples.NativeTabbar || (function(Rho) {

	function getActionUrls() {
		var links = $(".ui-page-active").find(".tabbarurls > a");
		var urls = [];
		links.each(function(index) {
			urls.push($(links[index]).attr("href"));
		});
		
		return urls;
	}

	function tabbarCallback(params) {
		if (params["tabEvent"] == "onTabFocus") {
			var newIndex = params["tab_index"];
			alert("Switching to tab number "+newIndex);
		}
	}

	function createTabbar() {
		var actionUrls = getActionUrls();
		// Actions are empty because we will use the callback to decide what to do when each button is selected
		Rho.NativeTabbar.create([{
				label: "Home",
				action: actionUrls[0]
			}, {
				label: "Tabbar",
				action: actionUrls[1]
			}, {
				label: "example.com",
				action: actionUrls[2]
			}, {
				label: "Remove",
				action: actionUrls[3]
			}], {
				createOnDemand : true
			}, tabbarCallback);
	}

	function switchTab() { 
		Rho.NativeTabbar.switchTab(2);
	}

	function removeTabbar() { 
		Rho.NativeTabbar.remove();
	}

	return {
		createTabbar: createTabbar,
		switchTab: switchTab,
		removeTabbar: removeTabbar
	};

})(Rho);