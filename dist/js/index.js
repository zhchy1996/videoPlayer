const $scope = $(document.body);
const root = window.player;
const render = root.render;
const control = root.control;
const process = root.process;
const danmu = root.danmu;
root.index = 0;
root.allLength = 0;
root.data;


//渲染部分
//高度渲染
render.renderHeight();

$(window).resize(function() {
    render.renderHeight()
  })
  //获取数据
$.ajax({
  type: 'get',
  url: 'http://www.easy-mock.com/mock/5999116e059b9c566dc874d4/video/list',
  success: function(data) {
    render.renderUrl(data)
    $('#video')[0].load();
    render.renderTitle(data);
    $('#video').on('loadedmetadata', function() {
      render.renderAllTime();
    })
    root.allLength = data.list.length;
    root.data = data
      //弹幕加载
    root.danmu.init(root.data.list[root.index].danmu)
  }

})


//控制部分
function addControl() {
  var $video = $('#video');
  var $control = $('.control');
  var $play = $control.find('.play');
  $play.one('click', function() {
    root.control.play()
  })
  $video.on('play', function() {
    $play.attr('src', '/static/img/暂停.svg')
    $play.one('click', function() {
      root.control.pause()
    })
  })
  $video.on('pause', function() {
    $play.attr('src', '/static/img/play.svg')
    $play.one('click', function() {
      root.control.play()
    })
  })
  $control.find('.prev').on('click', function() {
    $video.trigger('pause')
    root.index = (root.index + root.allLength - 1) % root.allLength;
    render.renderUrl(root.data);
    root.danmu.init(root.data.list[root.index].danmu)
    $('#video')[0].load();
    render.renderTitle(root.data);
    $('#video').on('loadedmetadata', function() {
      render.renderAllTime();
    })
  })
  $control.find('.next').on('click', function() {
    $video.trigger('pause')
    root.index = (root.index + root.allLength + 1) % root.allLength;
    render.renderUrl(root.data);
    root.danmu.init(root.data.list[root.index].danmu)
    $('#video')[0].load();
    render.renderTitle(root.data);
    $('#video').on('loadedmetadata', function() {
      render.renderAllTime();
    })
  })
  $control.find('.stop').on('click', function() {
    $video.trigger('pause')
    $video[0].load()
    root.danmu.init(root.data.list[root.index].danmu)
  })
  $('.full').on('click', function() {
    $video[0].webkitRequestFullScreen();
  })
  $video.on('ended', function() {
    $('.next').click()
  })

}
addControl();
//监听播放时间
var allTime = $('video')[0].duration;


$('#video').on('timeupdate', function() {
  var now = $('video')[0].currentTime;
  render.renderNow();
  render.updata();

})
process.tuodong()

//音量显示
window.onload = (function() {
  var one = true;
  $('.btn .remind').on('click', function() {
    if ($('.btn .remind').css('display') == 'block') {
      $('.btn .volume').css('display', 'none');
    } else {
      $('.btn .volume').css('display', 'block');
      if (one) {
        process.volumeTuodong();
        one = false
      }

    }

  })
})()