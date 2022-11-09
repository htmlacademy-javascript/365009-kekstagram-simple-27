import { userPictureForm, closeUserModal } from './user-modal.js';

const successModalTemplate = document.querySelector('#success').content;
const successModal = successModalTemplate.cloneNode(true);
const successButton = successModal.querySelector('.success__button');

const errorModalTemplate = document.querySelector('#error').content;
const errorModal = errorModalTemplate.cloneNode(true);
const errorButton = errorModal.querySelector('.error__button');

const pristine = new Pristine(userPictureForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'img-upload__error'
});

const showErrorModal = function () {
  document.body.appendChild(errorModal);
};

const showSuccessModal = function () {
  document.body.appendChild(successModal);
};

userPictureForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();

  if(isValid) {
    showSuccessModal();
  } else {
    showErrorModal();
  }
});

errorButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  document.querySelector('.error').remove();
});

successButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  document.querySelector('.success').remove();
  userPictureForm.submit();
  closeUserModal();
});
