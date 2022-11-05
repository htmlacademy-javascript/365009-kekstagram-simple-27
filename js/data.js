import { getRandomPositiveNumber, getRandomArrayElement } from './util.js';

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

const AMOUNT_PHOTO = 25;

// Генерация объекта с данными фотографии

const generatePhoto = function (index) {
  return {
    id: index,
    url: `/photos/${index}.jpg`,
    description: getRandomArrayElement(PHOTO_DESCRIPTION),
    likes: getRandomPositiveNumber(PHOTO_COUNTS.LIKES[0], PHOTO_COUNTS.LIKES[1]),
    comments: getRandomPositiveNumber(PHOTO_COUNTS.COMMENTS[0], PHOTO_COUNTS.COMMENTS[1]),
  };
};

// Получение масива из объектов с данными о фотографии

const getPhotoArray = function () {
  const array = [];
  for (let i = 0; i < AMOUNT_PHOTO; i++) {
    array.push(generatePhoto(i + 1));
  }

  return array;
};

const data = getPhotoArray();

export { data };
