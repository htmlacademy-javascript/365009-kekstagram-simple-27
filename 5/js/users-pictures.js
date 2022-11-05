import { data } from './data.js';

const usersPictures = document.querySelector('.pictures');
const userPictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const usersPicturesFragment = document.createDocumentFragment();

data.forEach(({ url, likes, description, comments }) => {
  const userPicture = userPictureTemplate.cloneNode(true);
  userPicture.querySelector('.picture__img').src = url;
  userPicture.querySelector('.picture__img').alt = description;
  userPicture.querySelector('.picture__likes').textContent = likes;
  userPicture.querySelector('.picture__comments').textContent = comments;
  usersPicturesFragment.appendChild(userPicture);
});

usersPictures.appendChild(usersPicturesFragment);

export { usersPictures };
