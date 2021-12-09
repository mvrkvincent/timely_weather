import {createReducer} from '@reduxjs/toolkit';

const initialState = {
    location: {},
};

export const locationReducer = createReducer(initialState, builder => {
    builder
        .addCase('RECEIVE_LOCATION', (state, action) => {
            const locationData = {
                lat: action.payload.coords.latitude,
                lon: action.payload.coords.longitude,
                timestamp: action.payload.timestamp,
            }
            state.location = locationData;
        }).addCase('RECEIVE_CURRENT_WEATHER', (state, action) => {
            const locationData = {
                city: action.payload.name,
                lat: action.payload.coord.lat,
                lon: action.payload.coords.lon,
                timestamp: action.payload.dt,
            }
            state.location = locationData;
        });
});