(function(root) {
  var Danmu = function() {
    this.dArr = [];
    this.pArr = [];
    this.top = 0;
    this.lock = true;
  }
  Danmu.prototype = {
    init: function(ourl) {
      var $self = this;
      $.ajax({
        url: ourl,
        type: 'GET',
        success: function(data) {
          $self.deal(data)
        }

      })
    },
    deal: function(data) {
      this.dArr = data.getElementsByTagName('d');
      var dLen = this.dArr.length;
      // for (let i = 0; i < dLen; i++) {
      //   this.pArr.push(this.dArr[i].attributes.p.nodeValue.split(','))
      // }
      this.dArr = Array.prototype.slice.call(this.dArr)
      this.dArr.sort(function(a, b) {
        return a.attributes.p.nodeValue.split(',')[0] - b.attributes.p.nodeValue.split(',')[0]
      })
      console.log(this.dArr)
    },
    append: function(time, height) {
      var fir = this.dArr[0].attributes.p.nodeValue.split(',')[0];
      var len = this.dArr.length;
      var now;
      if (time >= fir) {
        for (let i = 0; i < len; i++) {
          if (this.dArr[0].attributes.p.nodeValue.split(',')[0] < time) {
            now = null;
            now = $('<span/>');
            $('#danmu').append(now.append(this.dArr.splice(0, 1)))
            let now1 = $('#danmu span').last()
            now.css('top', this.top)
            this.top = (this.top + 30 + height) % height
              // (now.index() * 30 + 560) % 560
            setTimeout(() => {

              now1.remove()
            }, 5200)
          }

        }
        setTimeout(function() {
          $('#danmu span').css('transform', 'translateX(-100%)')
        }, 10)

      }
    },
    delete: function() {
      // if (this.lock) {
      //   var ele, position, width, len, arr;
      //   // arr = $('#danmu span')
      //   // len = arr.length;
      //   // if (len < 5) {
      //   //   this.top = 0;
      //   // }
      //   for (let i = $('#danmu span').length - 1; i > 0; i--) {
      //     ele = $('#danmu span').eq(i)
      //     position = ele.position().left;
      //     width = -ele.width();
      //     if (position <= width) {
      //       ele.remove();
      //       // console.log('a')
      //     }
      //   }
      // }

    }
  }
  root.danmu = new Danmu();
})(window.player || (window.player = {}))