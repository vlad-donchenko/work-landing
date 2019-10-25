(function () {
  var videoBackgroundElement = $('#promo');
  var VIDEO_PATH = 'img/video/video';
  var VIDEO_IMAGE = 'img/video/background-video.jpg';

  videoBackgroundElement.vide({
      mp4: VIDEO_PATH,
      poster: VIDEO_IMAGE
    },
    {
      loop: true,
      autoplay: true,
      position: '50% 50%',
      resizing: true,
      posterType: 'jpg',
      className: 'promo__video'
    });
})();
