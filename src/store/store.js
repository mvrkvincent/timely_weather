import {configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {locationReducer} from '../reducers/location_reducer';
import { weatherReducer } from '../reducers/weather_reducer';


const preloadedState = {};

export const store = configureStore({
    reducer: {location: locationReducer, weather: weatherReducer},
    middleware: getDefaultMiddleware => getDefaultMiddleware({serializableCheck: false})
      .concat(process.env.NODE_ENV !== 'production' ? logger : []),
    preloadedState
});