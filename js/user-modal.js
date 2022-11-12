import { isEscapeKey } from './util.js';

const userPictureForm = document.querySelector('.img-upload__form');
const uploadPictureButton = userPictureForm.querySelector('.img-upload__input');
const pictureEditorModal = userPictureForm.querySelector('.img-upload__overlay');
const editorCloseButton = userPictureForm.querySelector('.img-upload__cancel');

const successModal = document.querySelector('#success').content.querySelector('.success');
const successButton = successModal.querySelector('.success__button');
const errorModal = document.querySelector('#error').content.querySelector('.error');
const errorButton = errorModal.querySelector('.error__button');

function closeUserModal () {
  pictureEditorModal.classList.add('hidden');
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

function openUserModal () {
  pictureEditorModal.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onModalEscKeydown);
}

uploadPictureButton.addEventListener('change', openUserModal);

//Окно с ошибкой или удачной отправкой формы

const showErrorModal = function () {
  document.body.appendChild(errorModal);
};

const showSuccessModal = function () {
  document.body.appendChild(successModal);
};

const hideErrorModal = function () {
  errorModal.remove();
};

errorButton.addEventListener('click', hideErrorModal);

document.addEventListener('keydown', () => {
  if(isEscapeKey || errorModal) {
    hideErrorModal();
  }
});

const hideSuccessModal = function () {
  successModal.remove();
  userPictureForm.submit();
  closeUserModal();
};

successButton.addEventListener('click', hideSuccessModal);

export { userPictureForm, showErrorModal, showSuccessModal };
