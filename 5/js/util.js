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

export { getRandomPositiveNumber, getRandomArrayElement };
