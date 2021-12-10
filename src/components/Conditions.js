import React from 'react';
import './Conditions.css';

export const Conditions = ({conditions}) => {
    const {feels_like, humidity, wind, pressure} = conditions;

    return (
        <div className='Conditions'>
            <div className='condition'>
            <i class="fas fa-thermometer-half" />
                <div className='col'>
                    <span>{Math.floor(feels_like)}°F</span>
                    <span className='sub'>Feels Like</span>
                </div>
            </div>
            <div className='condition'>
                <i class="fas fa-wind" />
                <div className='col'>
                    <span>{wind.speed} MPH</span>
                    <span className='sub'>Wind</span>
                </div>
            </div>
            <div className='condition'>
                <i class="fas fa-smog" />
                <div className='col'>
                    <span>{humidity}%</span>
                    <span className='sub'>Humidity</span>
                </div>
            </div>
            <div className='condition'>
                <i class="fas fa-compress-arrows-alt" />
                <div className='col'>
                    <span>{pressure} hPa</span>
                    <span className='sub'>Pressure</span>
                </div>
            </div>
        </div>
    );
};