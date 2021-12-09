import {createReducer} from '@reduxjs/toolkit';

const initialState = {};

export const locationReducer = createReducer(initialState, builder => {
    builder
        .addCase('RECEIVE_LOCATION', (state, action) => {
                state.lat = action.payload.coords.latitude;
                state.lon = action.payload.coords.longitude;
                state.timestamp = action.payload.timestamp;
        }).addCase('RECEIVE_CURRENT_WEATHER', (state, action) => {
                state.city = action.payload.name;
                state.lat = action.payload.coord.lat;
                state.lon = action.payload.coords.lon;
                state.timestamp = action.payload.dt;
        });
});