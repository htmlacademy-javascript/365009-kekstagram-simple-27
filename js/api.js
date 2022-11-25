import { showAlert } from './util.js';

const URL = 'https://27.javascript.pages.academy/kekstagram-simple';

const getData = (onSuccess) => {
  fetch(`${URL}/data`)
    .then((response) => response.json())
    .then((photos) => {
      onSuccess(photos);
    })
    .catch(() => showAlert(new Error('Не удалось загрузились фото, попробуйте ещё раз')));
};

const postData = (onSuccess, onFail, body) => {
  fetch(URL,
    {
      method: 'POST',
      body
    }
  )
    .then((response) => {
      if(response.ok) {
        return onSuccess();
      }
      throw new Error('Ошибка, попробуйте ещё раз');
    })
    .catch(onFail);
};

export { getData, postData };
