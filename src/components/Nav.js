import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import {requestGeoLocation} from '../utils/requestGeoLocation';
import {fetchLocalWeather, fetchCurrentWeather} from "../actions/weather_actions";
import './Nav.css';

const Nav = ({location, fetchLocalWeather, fetchCurrentWeather}) => {
    const [city, setCity] = useState('');

    let lastUpdated = new Date(location?.timestamp * 1000).toLocaleTimeString();

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const {coords} = await requestGeoLocation()
                const {latitude, longitude} = coords
                fetchLocalWeather({latitude, longitude});
            } catch (err) {
                fetchCurrentWeather('Fort Worth')
            }
        }
        if (city === '') {
            fetchWeather();
        }

    }, [fetchLocalWeather, fetchCurrentWeather ,city]);

    useEffect(() => {
        if (location.city) {
            setCity(location.city)
        }
    }, [location])

    const handleSubmit = e => {
        if (city) {
            e.preventDefault();
            fetchCurrentWeather(encodeURI(city))
        }
    }

    return(
        <div className='Nav'>
            <div className='col'>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={city}
                        onChange={e => setCity(e.target.value)} 
                    />
                    <input type="submit" style={{display: "none"}} value="submit"/>
                </form>
                <span className='sub'>Location</span>
            </div>
            <div className='title'>
                <h1>timely</h1>
                <img src='/images/icon.png' alt='Timely Weather Logo' />
                <h1>WEATHER</h1>
            </div>
            <div className='col'>
                <span>{location?.timestamp ? lastUpdated : ''}</span>
                <span className='sub'>Last Updated</span>
            </div>
        </div>
    );
};

const msp = ({user}) => ({
    location: user.location,
});

const mdp = dispatch => ({
    fetchLocalWeather: (lat, lon) => dispatch(fetchLocalWeather(lat, lon)),
    fetchCurrentWeather: city => dispatch(fetchCurrentWeather(city)),
});

export default connect(msp, mdp)(Nav);