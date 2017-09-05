(function(root) {
  var Render = function() {
      this.$scope = $(document.body);
      this.$video = $('#video')[0];
      this.now = 0;
      this.allTime = 0;
      this.height = 0;
    }
    //渲染视频源
  Render.prototype.renderUrl = function(data) {
      $('#video').attr('src', data.list[root.index || 0].source);
    }
    //渲染高度
  Render.prototype.renderHeight = function() {
      var $video = $('#video')
      var width = $video.width();
      var height = width / 16 * 9;
      var mHeight = -height;
      this.height = height - 30;
      $video.height(height)
      $('#danmu').height(height);
      $('#danmu').css('margin-top', mHeight)
    }
    //渲染标题
  Render.prototype.renderTitle = function(data) {
      $('.title').text(data.list[root.index || 0].title)
    }
    //渲染时间
  Render.prototype.renderAllTime = function() {
    var allTime = this.$video.duration;
    this.allTime = allTime;
    var hour = parseInt(allTime / 3600);
    allTime -= hour * 3600;
    var min = parseInt(allTime / 60);
    allTime -= min * 60;
    var sec = parseInt(allTime);
    allTime = hour ? (hour + ':' + min + ':' + sec) : (min + ':' + sec)
    $('.control .all-time').text(allTime)
  }
  Render.prototype.renderNow = function() {
    var now = this.$video.currentTime;
    this.now = now;
    var hour = parseInt(now / 3600);
    now -= hour * 3600;
    var min = parseInt(now / 60);
    now -= min * 60;
    var sec = parseInt(now);
    now = hour ? (hour + ':' + min + ':' + sec) : (min + ':' + sec)
    $('.control .now-time').text(now)
  }
  Render.prototype.updata = function() {
    var per = (this.now / this.allTime) * 100 - 100;
    $scope.find('.jindu .next-tiao').css('transform', 'translateX(' + per + '%)')
    root.danmu.append(this.now, this.height);
    root.danmu.delete();
  }
  Render.prototype.stopSlider = function() {

  }
  root.render = new Render();
})(window.player || (window.player = {}))