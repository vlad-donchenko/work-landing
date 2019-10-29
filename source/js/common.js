(function () {
  var videoBackgroundElement = $('#promo');
  var VIDEO_PATH = 'img/video/video';
  var VIDEO_IMAGE = 'img/video/background-video.jpg';
  var employeesSlider = $('.best-employees__slider');
  var reviewsSliders = $('.reviews__sliders');
  var menuButton = $('.nav__toggle');
  var siteHeader = $('.site-header');
  var mainMenu = $('.menu--header');
  var body = $('body');

  var onMenuOpenClick = function () {
    $(this).toggleClass('nav__toggle--open');
    siteHeader.toggleClass('site-header--open');
    mainMenu.toggleClass('menu--open');
    body.toggleClass('overflow-hidden');
  };

  menuButton.on('click', onMenuOpenClick);

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

  employeesSlider.slick({
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.best-employees__arrow--prev'),
    nextArrow: $('.best-employees__arrow--next'),
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  reviewsSliders.slick({
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow: $('.reviews__arrow--prev'),
    nextArrow: $('.reviews__arrow--next'),
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

})();
