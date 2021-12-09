import axios from 'axios';
import {createAction} from '@reduxjs/toolkit';

const receiveWeather = createAction('RECEIVE_WEATHER');

export const fetchLocalWeather = (lat, lon) => async dispatch => {
    try {
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_OW_API_KEY}`);
        dispatch(receiveWeather(res.data))
    } catch (err) {
        console.log(`${err} - in fetchCurrentWeather`)
    };
};

export const fetchCurrentWeather = city => async dispatch => {
    try {
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_OW_API_KEY}`);
        dispatch(receiveWeather(res.data))
    } catch (err) {
        console.log(`${err} - in fetchWeather`)
    };
};

