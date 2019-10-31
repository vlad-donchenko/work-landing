(function () {
  var sendPromo = document.querySelector('.send');
  var promoForm = sendPromo.querySelector('#send_promo');
  var calculationForm = document.querySelector('#your-earnings_calculation');
  var modalStandard = document.querySelector('#modal_try');
  var modalStandardForm = modalStandard.querySelector('#form_try');

  var save = function (url, onSuccess, data) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      onSuccess(xhr.response);
    });

    xhr.open('POST', url);
    xhr.send(data);
  };

  var showPromoHint = function () {
    sendPromo.classList.add('send--success');
    var sendTitle = sendPromo.querySelector('.send__title');
    var textBeforeSend = sendTitle.textContent;
    sendTitle.textContent = 'Спасибо';
    promoForm.classList.add('send__hidden');
    var hint = sendPromo.querySelector('.send__hint');
    hint.classList.add('send__hint--open');
    var restartButton = hint.querySelector('.button--update');

    var onUpdateFormClick = function () {
      sendPromo.classList.remove('send--success');
      promoForm.classList.remove('send__hidden');
      hint.classList.remove('send__hint--open');
      promoForm.reset();
      sendPromo.querySelector('.send__messenger-icon use').setAttribute('xlink:href', '#' + window.common.Icon['viber']);
      sendTitle.textContent = textBeforeSend;
      restartButton.removeEventListener('click', onUpdateFormClick);
    };

    restartButton.addEventListener('click', onUpdateFormClick);
  };

  promoForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    save(this.getAttribute('action'), showPromoHint, new FormData(promoForm));
  });

  var showModalSuccess = function () {
    var modals = document.querySelectorAll('.modal--open');

    if (modals) {
      for (var i = 0; i < modals.length; i++) {
        modals[i].classList.remove('modal--open');
        if (modals[i].closest('form')) {
          modals[i].closest('form').reset();
        } else {
          modals[i].querySelector('form').reset();
        }
        modals[i].querySelector('.send__messenger-icon use').setAttribute('xlink:href', '#' + window.common.Icon['viber']);
      }
    }

    var modal = document.querySelector('#modal_thank-you');
    modal.classList.add('modal--open');
  };

  calculationForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    save(this.getAttribute('action'), showModalSuccess, new FormData(calculationForm));
  });


  modalStandardForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    save(this.getAttribute('action'), showModalSuccess, new FormData(modalStandardForm));
  });

})();
