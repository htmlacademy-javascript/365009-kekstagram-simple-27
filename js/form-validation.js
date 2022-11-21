import { userPictureForm, showErrorModal, showSuccessModal, blockSubmitButton, unblockSubmitButton } from './user-modal.js';
import { postData } from './api.js';

const pristine = new Pristine(userPictureForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'img-upload__error'
});

const setUserFormSubmit = () => {
  userPictureForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();

    if(isValid) {
      blockSubmitButton();
      postData(
        () => {
          showSuccessModal();
          unblockSubmitButton();
        },
        () => {
          showErrorModal();
          unblockSubmitButton();
        },
        new FormData(evt.target),
      );
    }
  });
};

export { setUserFormSubmit };
