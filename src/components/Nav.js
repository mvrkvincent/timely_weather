import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import Cookies from 'universal-cookie/es6';
import {requestGeoLocation} from '../utils/requestGeoLocation';
import {fetchLocalWeather, fetchCurrentWeather} from "../actions/weather_actions";
import './Nav.css';

const Nav = ({location, errors, fetchLocalWeather, fetchCurrentWeather}) => {
    const [city, setCity] = useState('Fetching...');
    const [savedCity, setSavedCity] = useState('');
    
    let lastUpdated = new Date(location?.timestamp * 1000).toLocaleTimeString();

    useEffect(() => {
        const cookies = new Cookies();
        const cityCookie = cookies.get('city')
        const fetchInitialWeather = async () => {
            try {
                const {coords} = await requestGeoLocation()
                const {latitude, longitude} = coords;
                fetchLocalWeather(latitude, longitude);
            } catch (err) {
                fetchCurrentWeather('Fort Worth')
            }
        };

        if (errors) {
            fetchInitialWeather();
        } else if (city === 'Fetching...' && cityCookie) {
            fetchCurrentWeather(cityCookie);
            setSavedCity(cityCookie)
        } else if (city === 'Fetching...') {
            fetchInitialWeather();
        };

    }, [fetchLocalWeather, fetchCurrentWeather, savedCity, city, errors]);

    useEffect(() => {
        if (location.city) setCity(location.city)
    }, [location]);

    const toggleSavedCity = e => {
        const cookies = new Cookies();
        e.preventDefault();
        if (savedCity) {
            cookies.remove('city'); 
            setSavedCity('');
        } else {
            cookies.set('city', city);
            setSavedCity(city);
        };
    };

    const handleSubmit = e => {
        if (city) {
            e.preventDefault();
            fetchCurrentWeather(encodeURI(city))
        };
    };

    return(
        <div className='Nav'>
            <div className='col'>
                <div className='options row'>
                    <button 
                        className='sub'
                        onClick={toggleSavedCity}
                        style={{color: savedCity ? 'red' : '#AEAEAE'}}
                        title={savedCity ? 'Unpin City' : 'Pin City'}
                    >
                        <i class="fas fa-map-pin" /> 
                    </button>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            value={city}
                            onChange={e => setCity(e.target.value)} 
                        />
                        <input type="submit" style={{display: "none"}} value="submit"/>
                    </form>
                </div>
                {errors ?
                    <span className='sub'>City Not Found, Redirecting...</span> : 
                    <span className='sub'>{savedCity ? 'Pinned' : 'Current'} Location</span>}
            </div>
            <div className='title'>
                <h1>timely</h1>
                <img src='/images/icon.png' alt='Timely Weather Logo' />
                <h1>WEATHER</h1>
            </div>
            <div className='col'>
                <div className='options row'>
                        <button 
                            className='sub' 
                            onClick={handleSubmit}
                            title='Update'
                        >
                            <i class="fas fa-sync-alt" />
                        </button>
                    <span>{location.timestamp ? lastUpdated : 'Updating...'}</span>
                </div>
                <span className='sub'>Last Updated</span>
            </div>
        </div>
    );
};

const msp = ({user, errors}) => ({
    location: user.location,
    errors: errors.weather
});

const mdp = dispatch => ({
    fetchLocalWeather: (lat, lon) => dispatch(fetchLocalWeather(lat, lon)),
    fetchCurrentWeather: city => dispatch(fetchCurrentWeather(city)),
});

export default connect(msp, mdp)(Nav);