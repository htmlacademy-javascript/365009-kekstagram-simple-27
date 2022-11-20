const Scale = {
  MIN: 25,
  MAX: 100,
  STEP: 25,
};

const previewImage = document.querySelector('.img-upload__preview').querySelector('img');

const pictureScale = document.querySelector('.img-upload__scale');
const scaleDecreaseButton = pictureScale.querySelector('.scale__control--smaller');
const scaleIncreaseButton = pictureScale.querySelector('.scale__control--bigger');
const scaleInputValue = pictureScale.querySelector('.scale__control--value');

const filterReset = () => {
  previewImage.className = '';
  previewImage.style.transform = '';
  previewImage.style.filter = '';
  scaleInputValue.value = `${Scale.MAX}%`;
};

function getInputValue (input) {
  const inputValue = Number.parseInt(input.value, 10);

  if(Number.isNaN(inputValue)) {
    return 0;
  }

  return inputValue;
}

const onScaleDecrease = function () {
  const scaleValue = Math.max(getInputValue(scaleInputValue) - Scale.STEP, Scale.MIN);
  scaleInputValue.value = `${scaleValue}%`;
  previewImage.style.transform = `scale(${scaleValue / 100})`;
};

const onScaleIncrease = function () {
  const scaleValue = Math.min(getInputValue(scaleInputValue) + Scale.STEP, Scale.MAX);
  scaleInputValue.value = `${scaleValue}%`;
  previewImage.style.transform = `scale(${scaleValue / 100})`;
};

scaleDecreaseButton.addEventListener('click', onScaleDecrease);
scaleIncreaseButton.addEventListener('click', onScaleIncrease);

export { previewImage, getInputValue, Scale, scaleInputValue, filterReset };
