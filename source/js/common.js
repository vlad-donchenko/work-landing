(function () {
  var NAVBAR_HEIGHT = 71;
  var ESC_KEYCODE = 27;
  var VIDEO_PATH = 'img/video/video';
  var VIDEO_IMAGE = 'img/video/background-video.jpg';
  var videoBackgroundElement = $('#promo');
  var employeesSlider = $('.best-employees__slider');
  var reviewsSliders = $('.reviews__sliders');
  var menuButton = $('.nav__toggle');
  var siteHeader = $('.site-header');
  var mainMenu = $('.menu--header');
  var body = $('body');
  var modalButton = $('.button--modal');
  var modalCloseButton = $('.modal__close');
  var modal = $('.modal');
  var massageSelect = $('.send__form-control--select');
  var menuItem = $('.menu__link');
  var indexPage = $('.index-page');
  var scrollIndexHeight = $('.promo').outerHeight(true);
  var Icon = {
    viber: 'icon-viber',
    telegram: 'icon-telegram',
    whatsapp: 'icon-whatsapp'
  };

  var onMenuOpenClick = function () {
    $(this).toggleClass('nav__toggle--open');
    siteHeader.toggleClass('site-header--open');
    mainMenu.toggleClass('menu--open');
    body.toggleClass('overflow-hidden-modal');
  };

  var closeModal = function () {
    modal.removeClass('modal--open');
    body.removeClass('overflow-hidden-modal');
    modal.find('input').val('');
    $(document).off('keydown', onModalClosePress);
    $(document).off('click', onModalCloseOutsideClick);
  };

  var onModalClosePress = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      closeModal();
    }
  };

  var onModalCloseOutsideClick = function (evt) {
    if ($(evt.target).is('.modal')) {
      closeModal();
    }
  };

  var openModalClick = function (evt) {
    evt.preventDefault();
    var modalId = $(this).attr('href');
    $(modalId).addClass('modal--open');
    var formInputs = $(modalId).find('input');
    $(formInputs[0]).focus();
    body.addClass('overflow-hidden-modal');
    modalCloseButton.on('click', closeModal);
    $(document).on('keydown', onModalClosePress);
    $(document).on('click', onModalCloseOutsideClick);
  };

  var onIconChange = function () {
    var massageIcon = $(this).closest('.send__item--select').find('.send__messenger-icon use');
    massageIcon.attr('xlink:href', '#' + Icon[$(this).val()]);
  };

  var onAnimateScrollClick = function () {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top - NAVBAR_HEIGHT;
    menuButton.removeClass('nav__toggle--open');
    siteHeader.removeClass('site-header--open');
    mainMenu.removeClass('menu--open');
    body.removeClass('overflow-hidden-modal');
    $("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  };

  var getStartFixedMenu = function () {
    if (indexPage) {
      return scrollIndexHeight;
    } else {
      return NAVBAR_HEIGHT;
    }
  };

  var onFixedMenu = function () {
    if ($(this).scrollTop() > getStartFixedMenu()) {
      siteHeader.addClass('site-header--fixed');
    } else if ($(this).scrollTop() <= getStartFixedMenu()) {
      siteHeader.removeClass('site-header--fixed');
    }
  };

  $(window).on('scroll', onFixedMenu);

  menuItem.on('click', onAnimateScrollClick);
  massageSelect.on('change', onIconChange);
  modalButton.on('click', openModalClick);
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
    infinite: false,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.best-employees__arrow--prev'),
    nextArrow: $('.best-employees__arrow--next'),
    responsive: [
      {
        breakpoint: 991,
        settings: {
          infinite: true
        }
      }
    ]
  });

  reviewsSliders.slick({
    dots: true,
    infinite: false,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow: $('.reviews__arrow--prev'),
    nextArrow: $('.reviews__arrow--next'),
    responsive: [
      {
        breakpoint: 991,
        settings: {
          infinite: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 571,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  });

})();
