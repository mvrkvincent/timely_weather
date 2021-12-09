import {createReducer} from '@reduxjs/toolkit';

const initialState = {
};

export const userReducer = createReducer(initialState, builder => {
    builder
        .addCase('RECEIVE_CURRENT_WEATHER', (state, action) => {
                const location = {
                        city: action.payload.name,
                        lat: action.payload.coord.lat,
                        lon: action.payload.coord.lon,
                        timestamp: action.payload.dt,          
                }
                state.location = location;
        });
});