import template from '../templates/markupOne.hbs';
import template10 from '../templates/markup.hbs';
import PNotify from 'pnotify/dist/es/PNotify.js';

const mainDiv = document.querySelector('.mainDiv');

export default function processingData(data) {
  if (data.status === 404) error404();
  if (data.length === 1) {
    ShowResult(template(data[0]));
  } else if (data.length > 1 && data.length < 10) {
    let objCountries = {};
    objCountries.countries = data.map(item => item.name);
    ShowResult(template10(objCountries));
  } else if (data.length > 10) {
    moreTen();
  }
}

function ShowResult(markUp) {
  PNotify.closeAll();
  mainDiv.innerHTML = markUp;
}

function error404() {
  mainDiv.innerHTML = '';
  let noticeEr = PNotify.error({
    title: 'No matches!',
    modules: {
      Buttons: {
        closer: false,
        sticker: false,
      },
    },
  });
  noticeEr.on('click', function () {
    noticeEr.close();
  });
  input.value = '';
}

function moreTen() {
  mainDiv.innerHTML = '';
  let noticeMany = PNotify.notice({
    title: 'Too many matches found!',
    text: 'Please enter a more specific query.',
    modules: {
      Buttons: {
        closer: false,
        sticker: false,
      },
    },
  });
  noticeMany.on('click', function () {
    noticeMany.close();
  });
}
