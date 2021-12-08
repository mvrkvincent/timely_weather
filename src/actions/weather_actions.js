import axios from 'axios';
import {createAction} from '@reduxjs/toolkit';

const receiveWeather = createAction('RECEIVE_WEATHER');

export const fetchWeather = () => async dispatch => {
    try {
        const res = await axios.get('')
        dispatch(receiveWeather(res.data))
    } catch (err) {
        console.log(`${err} - in fetchWeather`)
    };
};
