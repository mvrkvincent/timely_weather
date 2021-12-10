import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import Cookies from 'universal-cookie/es6';
import {requestGeoLocation} from '../utils/requestGeoLocation';
import {fetchLocalWeather, fetchCurrentWeather} from "../actions/weather_actions";
import './Nav.css';

const Nav = ({location, fetchLocalWeather, fetchCurrentWeather}) => {
    const [city, setCity] = useState('');
    const [savedCity, setSavedCity] = useState('')
    
    let lastUpdated = new Date(location?.timestamp * 1000).toLocaleTimeString();

    useEffect(() => {
        const cookies = new Cookies();
        const cityCookie = cookies.get('city')
        const fetchInitialWeather = async () => {
            try {
                const {coords} = await requestGeoLocation()
                const {latitude, longitude} = coords
                fetchLocalWeather(latitude, longitude);
            } catch (err) {
                fetchCurrentWeather('Fort Worth')
            }
        };

        if (!city && cityCookie) {
            fetchCurrentWeather(cityCookie);
            setSavedCity(cityCookie)
        } else if (!city) {
            fetchInitialWeather();
        };

    }, [fetchLocalWeather, fetchCurrentWeather, savedCity, city]);

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
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={city}
                        onChange={e => setCity(e.target.value)} 
                    />
                    <input type="submit" style={{display: "none"}} value="submit"/>
                </form>
                <button 
                    className='sub' 
                    onClick={toggleSavedCity}
                    style={{color: savedCity ? 'red' : 'inherit'}}
                >
                    <i class="fas fa-map-pin" /> Location
                </button>
            </div>
            <div className='title'>
                <h1>timely</h1>
                <img src='/images/icon.png' alt='Timely Weather Logo' />
                <h1>WEATHER</h1>
            </div>
            <div className='col'>
                <span>{location?.timestamp ? lastUpdated : ''}</span>
                <button className='sub' onClick={handleSubmit}>
                    <i class="fas fa-sync-alt"></i> Last Updated
                </button>
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