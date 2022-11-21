import { showAlert } from './util.js';

const getData = (onSuccess) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => response.json())
    .then((photos) => {
      onSuccess(photos);
    })
    .catch(showAlert);
};

const postData = (onSuccess, onFail, body) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple',
    {
      method: 'POST',
      body
    }
  )
    .then((response) => {
      if(response.ok) {
        onSuccess();
      } else {
        throw new Error;
      }
    })
    .catch(onFail);
};

export { getData, postData };
