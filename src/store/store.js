import {configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {locationReducer} from '../reducers/location_reducer';


const preloadedState = {};

export const store = configureStore({
    reducer: locationReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({serializableCheck: false})
      .concat(process.env.NODE_ENV !== 'production' ? logger : []),
    preloadedState
});