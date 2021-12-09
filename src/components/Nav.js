import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import {fetchInitialWeather} from "../actions/weather_actions";
import './Nav.css';

const Nav = ({location, fetchInitialWeather}) => {

    let lastUpdated = new Date(location?.timestamp).toLocaleTimeString();

    
    useEffect(() => {
        const onSuccess = position => {
            const lat = position.coords.latitude.toString();
            const lon = position.coords.longitude.toString();
            fetchInitialWeather(lat, lon)
        };
    
        const onFailure = error => {
            console.warn(error);
        };

        navigator.geolocation.getCurrentPosition(onSuccess, onFailure);  
    }, [fetchInitialWeather])

    return(
        <div className='Nav'>
            <div className='col'>
                <span>{location?.city}</span>
                <span className='sub'>Location</span>
            </div>
            <h1>TimelyWEATHER</h1>
            <div className='col'>
                <span>{lastUpdated}</span>
                <span className='sub'>Last Updated</span>
            </div>
        </div>
    );
};

const msp = ({user}) => ({
    location: user.location,
});

const mdp = dispatch => ({
    fetchInitialWeather: (lat, lon) => dispatch(fetchInitialWeather(lat, lon))
});

export default connect(msp, mdp)(Nav);