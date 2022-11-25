import { isEscapeKey } from './util.js';
import { resetData } from './picture-scale.js';

const userPictureForm = document.querySelector('.img-upload__form');
const uploadPictureButton = userPictureForm.querySelector('.img-upload__input');
const pictureOverlayModal = userPictureForm.querySelector('.img-upload__overlay');
const editorCloseButton = userPictureForm.querySelector('.img-upload__cancel');
const submitButton = userPictureForm.querySelector('.img-upload__submit');

const successModal = document.querySelector('#success').content.querySelector('.success');
const successButton = successModal.querySelector('.success__button');
const errorModal = document.querySelector('#error').content.querySelector('.error');
const errorButton = errorModal.querySelector('.error__button');

const onUserModalClose = () => {
  pictureOverlayModal.classList.add('hidden');
  document.body.classList.remove('modal-open');
  resetData();
  document.removeEventListener('keydown', onModalEscKeydown);
};

editorCloseButton.addEventListener('click', onUserModalClose);

function onModalEscKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    onUserModalClose();
  }
}

function onModalOutClick (evt) {
  if (evt.target === pictureOverlayModal) {
    onUserModalClose();
  }
}

const onUserModalOpen = () => {
  pictureOverlayModal.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onModalEscKeydown);
  document.addEventListener('click', onModalOutClick);
};

uploadPictureButton.addEventListener('change', onUserModalOpen);

const onErrorModalHide = () => {
  errorModal.remove();
};

const onErrorEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    onErrorModalHide();
    document.addEventListener('keydown', onModalEscKeydown);
    document.removeEventListener('keydown', onErrorEscKeydown);
  }
};

const showErrorModal = () => {
  document.body.appendChild(errorModal);

  editorCloseButton.addEventListener('click', onUserModalClose);
  document.removeEventListener('keydown', onModalEscKeydown);
  document.addEventListener('keydown', onErrorEscKeydown);
  errorModal.addEventListener('click', onAlertOutClick);
};

const onSuccessModalHide = () => {
  successModal.remove();
  document.removeEventListener('click', onModalOutClick);
  onUserModalClose();
};

const onSuccessEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    onSuccessModalHide();
    document.addEventListener('keydown', onModalEscKeydown);
    document.removeEventListener('keydown', onSuccessEscKeydown);
  }
};

const showSuccessModal = () => {
  document.body.appendChild(successModal);

  editorCloseButton.addEventListener('click', onUserModalClose);
  document.removeEventListener('keydown', onModalEscKeydown);
  document.addEventListener('keydown', onSuccessEscKeydown);
  successModal.addEventListener('click', onAlertOutClick);
};

function onAlertOutClick (evt) {
  if (evt.target === errorModal) {
    onErrorModalHide();
  }
  if (evt.target === successModal) {
    onSuccessModalHide();
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

errorButton.addEventListener('click', onErrorModalHide);
successButton.addEventListener('click', onSuccessModalHide);
// -----------------Вопрос!!!---------------------Вопрос!!!---------------------------Вопрос!!!----------------
export { userPictureForm, showErrorModal, showSuccessModal, blockSubmitButton, unblockSubmitButton };
