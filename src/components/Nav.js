import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import {fetchLocalWeather, fetchCurrentWeather} from "../actions/weather_actions";
import './Nav.css';

const Nav = ({location, fetchLocalWeather, fetchCurrentWeather}) => {
    const [city, setCity] = useState(location?.city || '');

    let lastUpdated = new Date(location?.timestamp).toLocaleTimeString();

    useEffect(() => {
        if (city === '') {
            const onSuccess = position => {
                const lat = position.coords.latitude.toString();
                const lon = position.coords.longitude.toString();
                fetchLocalWeather(lat, lon)
            };
        
            const onFailure = error => {
                fetchCurrentWeather(encodeURI('Fort Worth'));
                console.warn(error);
            };
    
            navigator.geolocation.getCurrentPosition(onSuccess, onFailure);  
        }

    }, [fetchLocalWeather, fetchCurrentWeather, city]);

    useEffect(() => {
        if (location?.city) {
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
            <h1>TimelyWEATHER</h1>
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