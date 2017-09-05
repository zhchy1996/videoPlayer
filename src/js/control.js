(function(root) {
  var Control = function() {
    this.$video = $('#video')[0];
    this.state = 'stop'
  }
  Control.prototype = {
    play: function() {
      this.$video.play()
      this.state = 'play'
    },
    pause: function() {
      this.$video.pause()
      this.state = 'pause'
    },
    volume: function(vol) {
      this.$video.volume = vol;
    },
    goto: function(time) {
      time = time * render.allTime;
      this.$video.currentTime = time;
    },
    stop: function() {
      this.$video.load()
    }
  }
  root.control = new Control()
})(window.player || (window.player = {}))