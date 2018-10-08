function TenkoInput() {
	this.events = {};
	if (window.navigator.msPointerEnabled) {	// IE10
		this.eventTouchstart    = "MSPointerDown";
		this.eventTouchmove     = "MSPointerMove";
		this.eventTouchend      = "MSPointerUp";
	} else {
		this.eventTouchstart    = "touchstart";
		this.eventTouchmove     = "touchmove";
		this.eventTouchend      = "touchend";
	}
	this.listen();
};

TenkoInput.prototype.on = function(event, callback) {
  if (!this.events[event]) {
    this.events[event] = [];
  }
  this.events[event].push(callback);
};

TenkoInput.prototype.emit = function(event, data) {
  var callbacks = this.events[event];
  if (callbacks) {
    callbacks.forEach(function(callback) {
      callback(data);
    });
  }
};

TenkoInput.prototype.listen = function() {
	var self = this;
	var keyboard_map = {
		38: 0, // up
		39: 1, // right
		40: 2, // down
		37: 3, // left
		87: 0, // w
		68: 1, // d
		83: 2, // s
		65: 3  // a
	};
	document.addEventListener("keydown", function(event) {
		var mapped_key = keyboard_map[event.which];
		if (mapped_key !== undefined) {
			event.preventDefault();
			self.emit("move", mapped_key);
		};
	});
	
	this.bindOption("#mode_display", this.reverseMode);
	this.bindOption("#mode_reset", this.resetAll);
	this.bindOption("#status_level", this.levelJump);
	
	var touchStartClientX, touchStartClientY;

	document.addEventListener(this.eventTouchstart, function (event) {
		if ((!window.navigator.msPointerEnabled && event.touches.length > 1) ||
			event.targetTouches > 1) {
			return; 
		}

		if (window.navigator.msPointerEnabled) {
			touchStartClientX = event.pageX;
			touchStartClientY = event.pageY;
		} else {
			touchStartClientX = event.touches[0].clientX;
			touchStartClientY = event.touches[0].clientY;
		}
		event.preventDefault();
	});

	document.addEventListener(this.eventTouchmove, function (event) {
		event.preventDefault();
	});

	document.addEventListener(this.eventTouchend, function (event) {
		if ((!window.navigator.msPointerEnabled && event.touches.length > 0) ||
			event.targetTouches > 0) {
			return; 
		}

		var touchEndClientX, touchEndClientY;

		if (window.navigator.msPointerEnabled) {
			touchEndClientX = event.pageX;
			touchEndClientY = event.pageY;
		} else {
			touchEndClientX = event.changedTouches[0].clientX;
			touchEndClientY = event.changedTouches[0].clientY;
		}

		var dx = touchEndClientX - touchStartClientX;
		var absDx = Math.abs(dx);
		var dy = touchEndClientY - touchStartClientY;
		var absDy = Math.abs(dy);

		if (Math.max(absDx, absDy) > 10) {
			// (r : l) : (d : u)
			self.emit("move", absDx > absDy ? (dx > 0 ? 1 : 3) : (dy > 0 ? 2 : 0));
		}
	});
};

TenkoInput.prototype.reverseMode = function (event) {
  event.preventDefault();
  this.emit("reverseMode");
};

TenkoInput.prototype.resetAll = function (event) {
  event.preventDefault();
  this.emit("resetGame");
};

TenkoInput.prototype.levelJump = function (event) {
	event.preventDefault();
	this.emit("skipLevels")
}

TenkoInput.prototype.bindOption = function (selector, fn) {
  var button = document.querySelector(selector);
  button.addEventListener("click", fn.bind(this));
  button.addEventListener(this.eventTouchend, fn.bind(this));
};
