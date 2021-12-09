import {createReducer} from '@reduxjs/toolkit';

const initialState = {};

export const weatherReducer = createReducer(initialState, builder => {
    builder
        .addCase('RECEIVE_CURRENT_WEATHER', (state, action) => {
            return action.payload
        });
});