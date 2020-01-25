'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var randomElem = function (arr, max, min) {
  min = Math.ceil(min);
  max = Math.floor(max);
  var i = Math.floor(Math.random() * (max - min + 1)) + min;
  return arr[i];
};

var wizards = [
  {
    name: randomElem(WIZARD_NAMES, WIZARD_NAMES.length - 1, 0) + ' ' + randomElem(WIZARD_SURNAME, WIZARD_SURNAME.length - 1, 0),
    coatColor: randomElem(COAT_COLOR, COAT_COLOR.length - 1, 0),
    eyesColor: randomElem(EYES_COLOR, EYES_COLOR.length - 1, 0)
  },
  {
    name: randomElem(WIZARD_NAMES, WIZARD_NAMES.length - 1, 0) + ' ' + randomElem(WIZARD_SURNAME, WIZARD_SURNAME.length - 1, 0),
    coatColor: randomElem(COAT_COLOR, COAT_COLOR.length - 1, 0),
    eyesColor: randomElem(EYES_COLOR, EYES_COLOR.length - 1, 0)
  },
  {
    name: randomElem(WIZARD_NAMES, WIZARD_NAMES.length - 1, 0) + ' ' + randomElem(WIZARD_SURNAME, WIZARD_SURNAME.length - 1, 0),
    coatColor: randomElem(COAT_COLOR, COAT_COLOR.length - 1, 0),
    eyesColor: randomElem(EYES_COLOR, EYES_COLOR.length - 1, 0)
  },
  {
    name: randomElem(WIZARD_NAMES, WIZARD_NAMES.length - 1, 0) + ' ' + randomElem(WIZARD_SURNAME, WIZARD_SURNAME.length - 1, 0),
    coatColor: randomElem(COAT_COLOR, COAT_COLOR.length - 1, 0),
    eyesColor: randomElem(EYES_COLOR, EYES_COLOR.length - 1, 0)
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
similarListElement.appendChild(fragment);
