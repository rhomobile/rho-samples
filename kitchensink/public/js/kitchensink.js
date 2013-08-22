
var KitchenSink = (function() {

	// User interface
	(function() {
		
		function toggle_example_description() {
			$(".ui-page-active .example_description").fadeToggle();
		}
		
		function filter_navmenu() {
			var searchText = $(this).val().toLowerCase();
			var sections = $(this).closest(".navmenu").find(".navmenu_sections");
			
			sections.find("div[data-role=collapsible]").each(function() {
				var keywords = $(this).data('filter');
				// If the search is empty, show every item
				if (typeof(keywords)==="undefined" || keywords.indexOf(searchText)!==-1) {
					$(this).fadeIn();
				} else {
					$(this).fadeOut();
				}
			});
		}
		
		function toggle_sample_visibility() {
			var language_to_show = $(this).data("language");
			
			$(this).closest("div[data-role=content]").find("div.sample").each(function() {
				var sample = $(this);

				if (sample.hasClass(language_to_show)) {
					sample.fadeIn();
				} else {
					sample.hide();
				}
			});
		}
		
		function init() {
			$(document).on("click", "a.ks_toggle_example_description", toggle_example_description);
			$(document).on("change keyup", ".navmenu_searchbox", filter_navmenu);
			$(document).on("click", "div[data-role=navbar] a", toggle_sample_visibility);
		}
		
		init();
	})();

	var Samples = {};
	
	return({
		Samples: Samples
	});
	
})(jQuery);

