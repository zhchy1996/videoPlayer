(function(root) {
  function Process() {
    this.startTouch = 0,
      this.change = 0,
      this.per = 0
    this.startPoint = 0
  }
  Process.prototype = {

    tuodong: function() {
      var maxWidth = $('.jindu .tiao').width();
      var startTouch = 0;
      var startPoint = $('.jindu .slider-point').offset().left;
      var change = 0;
      var per = 0;

      $('.jindu .slider-point').on('mousedown', function(e) {
        $('#video').off('timeupdate')
        startTouch = e.offsetX;
        $('.wrapper').on('mousemove', $('.jindu .slider-point'), function(e) {
          var change = e.clientX;
          per = (change - startPoint - startTouch) / maxWidth;
          $('.jindu .next-tiao').css('transform', 'translateX(' + (-1 + per) * 100 + '%)')
        }).on('mouseup', function(e) {
          $('.wrapper').off()
          control.goto(per)
          $('#video').on('timeupdate', function() {

            render.renderNow();
            render.updata();
            danmu.append(now);
          })
        })
      })

    },
    volumeTuodong: function() {
      var maxHeight = $('.volume .tiao').height();

      this.startPoint = $('.volume .slider-point').offset().top;
      var $self = this;
      $('.volume .slider-point').on('mousedown', function(e) {
        $self.startTouch = e.offsetY;
        $scope.on('mousemove', $('.volume .slider-point'), function(e) {
          $self.change = e.clientY;
          $self.per = ($self.change - $self.startPoint - $self.startTouch) / maxHeight;
          if ($self.per >= 0.9) {
            $self.per = 0.9
          }
          if ($self.per <= 0) {
            $self.per = 0;
          }
          $('.volume .next-tiao').css('transform', 'translateY(' + (-1 + $self.per) * 100 + '%)')
          var vol = 1 - ($self.per / 90 * 100)
          control.volume(vol)
        }).on('mouseup', function(e) {
          $scope.off()
          $('.btn .volume').css('display', 'none');

        })
      })
    }
  }

  root.process = new Process();
})(window.player || (window.player = {}))