import {createReducer} from '@reduxjs/toolkit';

const initialState = {
    
};

export const errorsReducer = createReducer(initialState, builder => {
    builder
        .addCase('RECEIVE_WEATHER_ERROR', (state, action) => {
                state.weather = action.payload.message;
        })
        .addCase('CLEAR_WEATHER_ERRORS', (state, action) => {
                state.weather = null;
        });
});