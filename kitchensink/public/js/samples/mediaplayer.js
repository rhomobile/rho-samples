KitchenSink.Samples.Mediaplayer = KitchenSink.Samples.Mediaplayer || (function() {

	function ringtones_callback(ringtones) {
	
		var result = "";
		for (var i=0; i<ringtones.length; i++) {
			var name = ringtones[i]["name"];
			result+='<li><a href="#" class="play_ringtone" data-ringtone="'+escape(name)+'">'+name+'</a></li>';
		}

		$(".ui-page-active ul.ringtone_list").html(result);
	}
	
	function list_ringtones() {
		Rho.Mediaplayer.getAllRingtones(ringtones_callback);
	}

	function play_ringtone(name) {
		Rho.Mediaplayer.playRingTone(name);
		$("a.stop_ringtone").fadeIn();
	}
	
	function stop_ringtone() {
		Rho.Mediaplayer.stopRingTone();
		$("a.stop_ringtone").fadeOut();
	}
	
	
	$(document).on("click", "a.play_ringtone", function() {
		var name = unescape($(this).data('ringtone'));
		alert("Playing: "+name);
		play_ringtone(name);
	});
	
	return {
		list_ringtones: list_ringtones,
		play_ringtone: play_ringtone,
		stop_ringtone: stop_ringtone
	};

})();