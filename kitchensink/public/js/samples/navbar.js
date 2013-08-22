KitchenSink.Samples.Navbar = KitchenSink.Samples.Navbar || (function() {

	function createNavbar() {
		Rho.Navbar.create({
			left: {
				label: "Home",
				action: Rho.Application.startURI
			},
			right: {
				label: "example.com",
				action: "http://www.example.com",
			},
			title: "Navbar title"
		});

	}

	function removeNavbar() {
		Rho.Navbar.remove();
	}

	return {
		createNavbar: createNavbar,
		removeNavbar: removeNavbar
	};
})();