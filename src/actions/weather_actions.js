import axios from 'axios';
import {createAction} from '@reduxjs/toolkit';

const receiveCurrentWeather = createAction('RECEIVE_CURRENT_WEATHER');

export const fetchInitialWeather = (lat, lon) => async dispatch => {
    try {
        const res = await axios.get(`api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OW_API_KEY}`);
        dispatch(receiveCurrentWeather(res.data))
    } catch (err) {
        console.log(`${err} - in fetchCurrentWeather`)
    };
};
