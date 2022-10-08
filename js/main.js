// Функция, возвращающая случайное целое число из переданного диапазона включительно
function getRandomPositiveNumber (min, max) {
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
}

// Функция для проверки максимальной длины строки

function isTextLength (string, maxLength) {
  return string.length > maxLength;
}

getRandomPositiveNumber(1, 4);
isTextLength('keks', 9);
