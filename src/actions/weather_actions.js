import axios from 'axios';
import {createAction} from '@reduxjs/toolkit';

const receiveCurrentWeather = createAction('RECEIVE_CURRENT_WEATHER');

export const fetchInitialWeather = (lat, lon) => async dispatch => {
    try {
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d8859c9cbe7ed2f5fa5e11b3780e040a`);
        dispatch(receiveCurrentWeather(res.data))
    } catch (err) {
        console.log(`${err} - in fetchCurrentWeather`)
    };
};
