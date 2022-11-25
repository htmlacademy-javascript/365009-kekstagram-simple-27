import { previewImage, resetEffect } from './picture-scale.js';

const FilterEffects = {
  None: {
    NAME: 'none',
    MIN: 0,
    MAX: 0,
    START: 0,
    STEP: 0,
    FILTER: '',
    UNIT: '',
  },
  Chrome: {
    NAME: 'chrome',
    MIN: 0,
    MAX: 1,
    START: 1,
    STEP: 0.1,
    FILTER: 'grayscale',
    UNIT: '',
  },
  Sepia: {
    NAME: 'sepia',
    MIN: 0,
    MAX: 1,
    START: 1,
    STEP: 0.1,
    FILTER: 'sepia',
    UNIT: '',
  },
  Marvin: {
    NAME: 'marvin',
    MIN: 0,
    MAX: 100,
    START: 100,
    STEP: 1,
    FILTER: 'invert',
    UNIT: '%',
  },
  Phobos: {
    NAME: 'phobos',
    MIN: 0,
    MAX: 3,
    START: 3,
    STEP: 0.1,
    FILTER: 'blur',
    UNIT: 'px',
  },
  Heat: {
    NAME: 'heat',
    MIN: 1,
    MAX: 3,
    START: 3,
    STEP: 0.1,
    FILTER: 'brightness',
    UNIT: '',
  },
};

const sliderContainer = document.querySelector('.img-upload__effect-level');
const sliderElement = sliderContainer.querySelector('.effect-level__slider');
const valueElement = sliderContainer.querySelector('.effect-level__value');

let effect = FilterEffects.None;

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

const onPictureFilterApply = (evt) => {
  if (evt.target.classList.contains('effects__radio')) {
    resetEffect();
    const v = evt.target.value;
    const key = v.at(0).toLocaleUpperCase() + v.slice(1).toLocaleLowerCase();
    effect = FilterEffects[key];

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

document.querySelector('.effects__list').addEventListener('click', onPictureFilterApply);
