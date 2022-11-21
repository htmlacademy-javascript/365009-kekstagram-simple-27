import { isEscapeKey } from './util.js';

const userPictureForm = document.querySelector('.img-upload__form');
const uploadPictureButton = userPictureForm.querySelector('.img-upload__input');
const pictureOverlayModal = userPictureForm.querySelector('.img-upload__overlay');
const editorCloseButton = userPictureForm.querySelector('.img-upload__cancel');
const submitButton = userPictureForm.querySelector('.img-upload__submit');

const successModal = document.querySelector('#success').content.querySelector('.success');
const successButton = successModal.querySelector('.success__button');
const errorModal = document.querySelector('#error').content.querySelector('.error');
const errorButton = errorModal.querySelector('.error__button');

function closeUserModal () {
  pictureOverlayModal.classList.add('hidden');
  document.body.classList.remove('modal-open');
  userPictureForm.reset();
  document.removeEventListener('keydown', onModalEscKeydown);
}

editorCloseButton.addEventListener('click', closeUserModal);


function onModalEscKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
}

function clickOutModal (evt) {
  if (evt.target === pictureOverlayModal) {
    closeUserModal();
  }
}

function openUserModal () {
  pictureOverlayModal.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onModalEscKeydown);
  document.addEventListener('click', clickOutModal);
}

uploadPictureButton.addEventListener('change', openUserModal);

//Окно с ошибкой или удачной отправкой формы

const hideErrorModal = function () {
  errorModal.remove();
};

const onErrorEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hideErrorModal();
    document.addEventListener('keydown', onModalEscKeydown);
    document.removeEventListener('keydown', onErrorEscKeydown);
  }
};

const showErrorModal = function () {
  document.body.appendChild(errorModal);

  editorCloseButton.addEventListener('click', closeUserModal);
  document.removeEventListener('keydown', onModalEscKeydown);
  document.addEventListener('keydown', onErrorEscKeydown);
  errorModal.addEventListener('click', onAlertOutClick);
};

const hideSuccessModal = function () {
  successModal.remove();
  document.removeEventListener('click', clickOutModal);
  closeUserModal();
};

const onSuccessEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hideSuccessModal();
    document.addEventListener('keydown', onModalEscKeydown);
    document.removeEventListener('keydown', onSuccessEscKeydown);
  }
};

const showSuccessModal = function () {
  document.body.appendChild(successModal);

  editorCloseButton.addEventListener('click', closeUserModal);
  document.removeEventListener('keydown', onModalEscKeydown);
  document.addEventListener('keydown', onSuccessEscKeydown);
  successModal.addEventListener('click', onAlertOutClick);
};

function onAlertOutClick(evt) {
  if (evt.target === errorModal) {
    hideErrorModal();
  }
  if (evt.target === successModal) {
    hideSuccessModal();
  }
}

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Отправка...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

errorButton.addEventListener('click', hideErrorModal);
successButton.addEventListener('click', hideSuccessModal);

export { userPictureForm, showErrorModal, showSuccessModal, blockSubmitButton, unblockSubmitButton };
