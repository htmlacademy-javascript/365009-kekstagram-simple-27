import { previewImage, filterReset } from './picture-scale.js';

const sliderContainer = document.querySelector('.img-upload__effect-level');
const sliderElement = sliderContainer.querySelector('.effect-level__slider');
const valueElement = sliderContainer.querySelector('.effect-level__value');

const FilterEffects = {
  none: {
    NAME: 'none',
    MIN: 0,
    MAX: 0,
    START: 0,
    STEP: 0,
    FILTER: '',
    UNIT: '',
  },
  chrome: {
    NAME: 'chrome',
    MIN: 0,
    MAX: 1,
    START: 1,
    STEP: 0.1,
    FILTER: 'grayscale',
    UNIT: '',
  },
  sepia: {
    NAME: 'sepia',
    MIN: 0,
    MAX: 1,
    START: 1,
    STEP: 0.1,
    FILTER: 'sepia',
    UNIT: '',
  },
  marvin: {
    NAME: 'marvin',
    MIN: 0,
    MAX: 100,
    START: 100,
    STEP: 1,
    FILTER: 'invert',
    UNIT: '%',
  },
  phobos: {
    NAME: 'phobos',
    MIN: 0,
    MAX: 3,
    START: 3,
    STEP: 0.1,
    FILTER: 'blur',
    UNIT: 'px',
  },
  heat: {
    NAME: 'heat',
    MIN: 1,
    MAX: 3,
    START: 3,
    STEP: 0.1,
    FILTER: 'brightness',
    UNIT: '',
  },
};

let effect = FilterEffects.none;

noUiSlider.create(sliderElement, {
  connect: 'lower',
  range: {
    min: effect.MIN,
    max: effect.MAX,
  },
  start: effect.START,
  step: effect.STEP,
});

sliderElement.noUiSlider.on('update', () => {
  valueElement.value = sliderElement.noUiSlider.get();
  previewImage.style.filter = `${effect.FILTER}(${sliderElement.noUiSlider.get()}${effect.UNIT})`;
});

const addFilter = (evt) => {
  if (evt.target.classList.contains('effects__radio')) {
    filterReset();

    effect = FilterEffects[evt.target.value];

    previewImage.classList.add(`effects__preview--${effect.NAME}`);
    if (effect.NAME === 'none') {
      sliderContainer.classList.add('hidden');
    } else {
      sliderContainer.classList.remove('hidden');
    }

    sliderElement.noUiSlider.updateOptions({
      range: {
        min: effect.MIN,
        max: effect.MAX,
      },
      start: effect.START,
      step: effect.STEP,
    });
  }
};

document.querySelector('.effects__list').addEventListener('click', addFilter);
