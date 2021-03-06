import {createReducer} from '@reduxjs/toolkit';

const initialState = {};

export const weatherReducer = createReducer(initialState, builder => {
    builder
        .addCase('RECEIVE_WEATHER', (state, action) => {
            state.current = action.payload.weather[0];
            state.feel = action.payload.main;
            state.wind = action.payload.wind;
            state.rain = action.payload.rain;
            state.snow = action.payload.snow;
            state.cloudCover = action.payload.clouds.all;
        })
        .addCase('RECEIVE_FORECAST', (state, action) => {
            state.forecast = action.payload.daily;
            state.alerts = action.payload.alerts;
        });
});