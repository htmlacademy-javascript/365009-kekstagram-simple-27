import { userPictureForm, showErrorModal, showSuccessModal } from './user-modal.js';
import './user-modal.js';

const pristine = new Pristine(userPictureForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'img-upload__error'
});

userPictureForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();

  if(isValid) {
    showSuccessModal();
  } else {
    showErrorModal();
  }
});
