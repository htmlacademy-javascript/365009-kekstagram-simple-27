//Функция, возвращающая случайное целое число из переданного диапазона включительно
function getRandomPositiveNumber (min, max) {
  if (min < 0 || max < 0) {
    throw 'Недопустимое число';
  }
  if (min > max) {
    max = min + (min = max) - max;
  }
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) - lower;
  return Math.floor(result);
}

//Функция для проверки максимальной длины строки
const getTextLength = (string, maxLength) => string.length > maxLength

getRandomPositiveNumber(1, 4);
getTextLength('keks', 9);
