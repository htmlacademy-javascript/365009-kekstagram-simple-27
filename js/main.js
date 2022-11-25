import { renderPictures } from './render-pictures.js';
import { onUserFormSubmit } from './form-validation.js';
import { getData } from './api.js';
import './picture-scale.js';
import './picture-filter.js';


getData((photos) => {
  renderPictures(photos);
});

onUserFormSubmit();
