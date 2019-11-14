(function () {
  var CALCULATOR_FORMULA_NUMBER_ONE = 2000;
  var CALCULATOR_FORMULA_NUMBER_TWO = 6;
  var sumSlider = document.querySelector('#range_sum');
  var ourSlider = document.querySelector('#range_our');
  var sumInput = document.querySelector('#calculation__sum');
  var ourInput = document.querySelector('#calculation__ours');
  var sumSliderMax = parseInt(sumInput.max);
  var sumSliderMin = parseInt(sumInput.min);
  var ourSliderMax = parseInt(ourInput.max);
  var ourSliderMin = parseInt(ourInput.min);
  document.createElement( "picture" );

  noUiSlider.create(sumSlider, {
    start: [sumSliderMin],
    connect: 'lower',
    range: {
      'min': [sumSliderMin],
      'max': [sumSliderMax]
    }
  });

  noUiSlider.create(ourSlider, {
    start: [ourSliderMin],
    connect: 'lower',
    step: 1,
    range: {
      'min': [ourSliderMin],
      'max': [ourSliderMax]
    }
  });

  //2000 + (Сумма/6 * Кол-ство часов) = Конечная сумма
  //2000 - (CALCULATOR_FORMULA_NUMBER_ONE - занес число 2000 в константу)
  //6 - (CALCULATOR_FORMULA_NUMBER_TWO - занес число 2000 в константу)
  var calculator = function (sum, ours) {
    var calculatorSum = document.querySelector('#calculation_sum');
    var calculation_total = document.querySelector('#calculation_total');
    var sum = Math.round(CALCULATOR_FORMULA_NUMBER_ONE + parseInt(sum) / CALCULATOR_FORMULA_NUMBER_TWO * parseInt(ours));
    calculation_total.value = sum;
    calculatorSum.textContent = sum.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&\ ') + '₽';
  };

  calculator(sumInput.value, ourInput.value);

  var oninputValueUpdate = function (inputName, value) {
    inputName.value = Math.round(value);
  };

  var  onNoUiSliderChange = function (sliderName, value) {
    sliderName.noUiSlider.set(value);
  };


  sumSlider.noUiSlider.on('update', function (values, handle) {
    oninputValueUpdate(sumInput, values[handle]);
    calculator(values[handle], ourInput.value);
  });

  ourSlider.noUiSlider.on('update', function (values, handle) {
    oninputValueUpdate(ourInput, values[handle]);
    calculator(sumInput.value, values[handle]);
  });

  sumInput.addEventListener('change', function () {
    onNoUiSliderChange(sumSlider, this.value);
    calculator(this.value, ourInput.value);
  });

  ourInput.addEventListener('change', function () {
    onNoUiSliderChange(ourSlider, this.value);
    calculator(sumInput.value, this.value);
  });

})();
