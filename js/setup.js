'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var similarListElement = setup.querySelector('.setup-similar-list');
var setupUserName = setup.querySelector('.setup-user-name');
var wizardCoat = setup.querySelector('.wizard-coat');
var wizardEyes = setup.querySelector('.wizard-eyes');
var setupFireballWrap = setup.querySelector('.setup-fireball-wrap');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var getRandomElem = function (arr) {
  var max = arr.length - 1;
  var i = Math.floor(Math.random() * (max + 1));
  return arr[i];
};

var wizards = [
  {
    name: getRandomElem(WIZARD_NAMES) + ' ' + getRandomElem(WIZARD_SURNAME),
    coatColor: getRandomElem(COAT_COLOR),
    eyesColor: getRandomElem(EYES_COLOR)
  },
  {
    name: getRandomElem(WIZARD_NAMES) + ' ' + getRandomElem(WIZARD_SURNAME),
    coatColor: getRandomElem(COAT_COLOR),
    eyesColor: getRandomElem(EYES_COLOR)
  },
  {
    name: getRandomElem(WIZARD_NAMES) + ' ' + getRandomElem(WIZARD_SURNAME),
    coatColor: getRandomElem(COAT_COLOR),
    eyesColor: getRandomElem(EYES_COLOR)
  },
  {
    name: getRandomElem(WIZARD_NAMES) + ' ' + getRandomElem(WIZARD_SURNAME),
    coatColor: getRandomElem(COAT_COLOR),
    eyesColor: getRandomElem(EYES_COLOR)
  }
];

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

var onPopupEscPress = function (evt) {
  if (evt.key === ESC_KEY) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

var onInputFocus = function () {
  document.removeEventListener('keydown', onPopupEscPress);
};

var onInputBlur = function () {
  document.addEventListener('keydown', onPopupEscPress);
};

var onReplaceСolor = function (arr, input, attribute) {
  var color = getRandomElem(arr);
  var inputHidden = setup.querySelector(input);
  attribute.style.cssText = 'fill:' + color + ';';
  inputHidden.value = color;
};

var onReplaceFireball = function () {
  var color = getRandomElem(FIREBALL_COLOR);
  var inputHidden = setup.querySelector('input[name="fireball-color"]');
  setupFireballWrap.style.cssText = 'background:' + color + ';';
  inputHidden.value = color;
};

setupUserName.addEventListener('focus', onInputFocus);

setupUserName.addEventListener('blur', onInputBlur);

similarListElement.appendChild(fragment);

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closePopup();
  }
});

wizardCoat.addEventListener('click', function () {
  onReplaceСolor(COAT_COLOR, 'input[name="coat-color"]', wizardCoat);
});

wizardEyes.addEventListener('click', function () {
  onReplaceСolor(EYES_COLOR, 'input[name="eyes-color"]', wizardEyes);
});

setupFireballWrap.addEventListener('click', function () {
  onReplaceFireball();
});
