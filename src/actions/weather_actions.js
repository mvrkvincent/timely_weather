import axios from 'axios';
import {createAction} from '@reduxjs/toolkit';

const receiveWeather = createAction('RECEIVE_WEATHER');
const receiveWeatherError = createAction('RECEIVE_WEATHER_ERROR');
const clearWeatherErrors = createAction('CLEAR_WEATHER_ERRORS');

const timestamp = new Date().toISOString();

const config = {
    Headers: {
        'Timestamp': timestamp,
    }
};

export const fetchLocalWeather = (lat, lon) => async dispatch => {
    try {
        const res = await axios
            .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${process.env.REACT_APP_OW_API_KEY}`, config);
        dispatch(receiveWeather(res.data))
        dispatch(clearWeatherErrors())
    } catch (err) {
        dispatch(receiveWeatherError(err))
    };
};

export const fetchCurrentWeather = city => async dispatch => {
    try {
        const res = await axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.REACT_APP_OW_API_KEY}`, config);
        dispatch(receiveWeather(res.data))
        dispatch(clearWeatherErrors())
    } catch (err) {
        dispatch(receiveWeatherError(err))
    };
};

