const userPictures = document.querySelector('.pictures');
const userPictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const userPicturesFragment = document.createDocumentFragment();


const renderPictures = (photos) => {
  photos.forEach(({ url, likes, description, comments }) => {
    const userPicture = userPictureTemplate.cloneNode(true);
    userPicture.querySelector('.picture__img').src = url;
    userPicture.querySelector('.picture__img').alt = description;
    userPicture.querySelector('.picture__likes').textContent = likes;
    userPicture.querySelector('.picture__comments').textContent = comments;
    userPicturesFragment.appendChild(userPicture);
  });

  userPictures.appendChild(userPicturesFragment);
};

export { renderPictures };
