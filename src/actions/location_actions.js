import {createAction} from '@reduxjs/toolkit';

const receiveLocation = createAction('RECEIVE_LOCATION');

export const fetchInitialLocation = () => async dispatch => {

    const onSuccess = position => {
        dispatch(receiveLocation(position));
    };
    const onFailure = error => {
        console.log(error);
    };
    
    navigator.geolocation.getCurrentPosition(onSuccess, onFailure);
  
};