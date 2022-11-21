// Окно ошибки при отправке формы

const ALERT_SHOW_TIME = 5000;

const showAlert = () => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.color = 'black';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'gold';

  alertContainer.textContent = 'message';

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

// Функция, возвращающая случайное целое число из переданного диапазона включительно

const getRandomPositiveNumber = function (min, max) {
  // min или max не являются числом
  if (typeof min !== 'number' || typeof max !== 'number') {
    return NaN;
  }
  // min или max равно бесконечности
  if (!Number.isFinite(min) || !Number.isFinite(max)) {
    return NaN;
  }
  // min или max отрицательное
  if (min < 0 || max < 0) {
    return NaN;
  }
  // Нет целых чисел в диапазоне
  if (Math.abs(max - min) < 1) {
    return NaN;
  }

  const safeMin = Math.min(min, max);
  const safeMax = Math.max(min, max);

  const lower = Math.ceil(safeMin);
  const upper = Math.floor(safeMax);

  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Функция для получения случайного элемента массива

const getRandomArrayElement = function (array) {
  // Аргумент не является массивом
  if (!Array.isArray(array)) {
    return undefined;
  }
  // Массив пуст
  if (array.length === 0) {
    return undefined;
  }
  // Массив включает в себя один элемент
  if (array.length === 1) {
    return array[0];
  }

  const index = array[getRandomPositiveNumber(0, array.length - 1)];
  return index;
};

// Функция для проверки максимальной длины строки

const isTextLongEnough = function (string, maxLength) {
  return string.length > maxLength;
};

isTextLongEnough('hello', 10);

const isEscapeKey = function (evt) {
  return evt.key === 'Escape';
};

export { getRandomPositiveNumber, getRandomArrayElement, isEscapeKey, showAlert };
