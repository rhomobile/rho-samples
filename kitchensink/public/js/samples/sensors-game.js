KitchenSink.Samples.Sensors = KitchenSink.Samples.Sensors || (function() {
	if (!Date.now) {
		Date.now = function now() {
			return new Date().getTime();
		}
	}

	var Game = {
		ball: {
			x: 0,
			y: 0,
			speed: 0
		},
		goal: {
			x: 0,
			y: 0
		},

		lastTick: 0,

		init: function(canvas) {
			this.canvas = canvas;
			ball.x = 0;
			ball.y = 0;
			ball.speed = 2;
			goal.x = 300;
			goal.y = 300;

			lastTick = Date.now();
		},
		
		draw: function() {
			
		}
	}

	function callback(params) {
		var now = Date.now();
		var elapsedTime = now - Game.lastTick;
		var delta_x = params["x"] > 0 ? ball.speed : -ball.speed;
		var delta_y = params["y"] > 0 ? ball.speed : -ball.speed;
		
		Game.ball.x+=delta_x;
		Game.ball.y+=delta_y;
		
		draw();
	}
	
	function draw() {
		
	}

	function startAccelerometer() {
		Game.init($("#accelerometergame"));
		Game.Rho::Sensors.watchAccelerometer(200, callback);
	}

	function stopAccelerometer() {
		Rho::Sensors.stopAccelerometer();
	}

	return {
		startAccelerometer: startAccelerometer,
		stopAccelerometer: stopAccelerometer
	};

})();