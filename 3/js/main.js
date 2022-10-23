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

// Генерация объекта с данными фотографии

const PHOTO_DESCRIPTION = [
  'Бастион',
  'Возврат',
  'Залог',
  'Капитуляция',
  'Манекен',
  'Мышь',
  'Рок-музыка',
  'Двойня',
  'Зоолог',
  'Инфинитив',
  'Подмастерье',
  'Татуировка',
  'Чебурек',
  'Альтруист',
  'Баба-яга',
  'Банкноты',
  'Белокровие',
  'Громоотвод',
  'Сура',
  'Хлорка',
  'Оброк',
  'Покупка',
  'Ренегатство',
  'Сбой',
  'Чистюля'
];

const PHOTO_COUNTS = {
  LIKES: [15, 200],
  COMMENTS: [0, 200]
};

const generatePhoto = function (index) {
  return {
    id: index,
    url: `/photos/${index}.jpg`,
    description: getRandomArrayElement(PHOTO_DESCRIPTION),
    likes: getRandomPositiveNumber(PHOTO_COUNTS.LIKES[0], PHOTO_COUNTS.LIKES[1]),
    comments: getRandomPositiveNumber(PHOTO_COUNTS.COMMENTS[0], PHOTO_COUNTS.COMMENTS[1]),
  };
};

// Получаем массив из объектов с описанием фото

const AMOUNT_PHOTO = 25;

const getPhotoArray = function () {
  const array = [];
  for (let i = 0; i < AMOUNT_PHOTO; i++) {
    array.push(generatePhoto(i + 1));
  }
  return array;
};

// Функция для проверки максимальной длины строки

function isTextLength (string, maxLength) {
  return string.length > maxLength;
}

isTextLength('Кекс', 10);
getPhotoArray(AMOUNT_PHOTO);
