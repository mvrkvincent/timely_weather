import {configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {userReducer} from '../reducers/user_reducer';
import {weatherReducer} from '../reducers/weather_reducer';
import {errorsReducer} from '../reducers/errors_reducer';


const preloadedState = {};

export const store = configureStore({
    reducer: {user: userReducer, weather: weatherReducer, errors: errorsReducer},
    middleware: getDefaultMiddleware => getDefaultMiddleware({serializableCheck: false})
      .concat(process.env.NODE_ENV !== 'production' ? logger : []),
    preloadedState
});