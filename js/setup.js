'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var userDialog = document.querySelector('.setup');

var similarListElement = userDialog.querySelector('.setup-similar-list');

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
userDialog.classList.remove('hidden');
similarListElement.appendChild(fragment);
