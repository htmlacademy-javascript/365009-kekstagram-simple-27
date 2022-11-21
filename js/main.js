import { renderPictures } from './render-pictures.js';
import { setUserFormSubmit } from './form-validation.js';
import './picture-scale.js';
import './picture-filter.js';
import { getData } from './api.js';

getData((photos) => {
  renderPictures(photos);
});

setUserFormSubmit();
