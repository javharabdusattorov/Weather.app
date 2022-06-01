let defaultCity = 'tashkent';
let currentWeather = {
    title: defaultCity,
    forecast: []
};
let bookmarks = JSON.parse(localStorage.getItem('bookmark')) || [];

const API_URL = `https://`;
const elInput = $('.form__search');
const elCardContainer = $('.card__weather-section');

const elYear = $('.year');
const elMonth = $('.month');
const elDay = $('.day');
const elHour = $('.hour');
const elMinute = $('.minute');
const elSecond = $('.second');

const elTemperature = $('.temperature');
const elWind = $('.wind');
const elDescription = $('.description');
const elCity = $('.city');
const elLoaderIMG = $('.loader__container img');
const elLIKEContainer = $('.section-items');
const elBODY = $('body');