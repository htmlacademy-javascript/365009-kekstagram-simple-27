import { isEscapeKey } from './util.js';

const userPictureForm = document.querySelector('.img-upload__form');
const uploadPictureButton = userPictureForm.querySelector('.img-upload__input');
const pictureEditorModal = userPictureForm.querySelector('.img-upload__overlay');
const editorCloseButton = userPictureForm.querySelector('.img-upload__cancel');

function closeUserModal () {
  pictureEditorModal.classList.add('hidden');
  document.body.classList.remove('modal-open');
  userPictureForm.reset();
  document.removeEventListener('keydown', onModalEscKeydown);
}

editorCloseButton.addEventListener('click', () => {
  closeUserModal();
});

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

uploadPictureButton.addEventListener('change', () => {
  openUserModal();
});

export { userPictureForm ,closeUserModal };
