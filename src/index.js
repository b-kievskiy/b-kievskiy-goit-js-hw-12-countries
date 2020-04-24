import './css/styles.css';
import 'pnotify/dist/PNotifyBrightTheme.css';
import fetchCountries from './js/fetchCountries';
import debounce from 'lodash.debounce';
import processingData from './js/myModules';

const input = document.querySelector('#country');
input.addEventListener('input', debounce(inputHandler, 500));

function inputHandler() {
  getData(input.value);
}

function getData(countryName) {
  fetchCountries(countryName)
    .then(data => processingData(data))
    .catch(error => console.error('Error: ', error));
}
