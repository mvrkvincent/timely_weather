import React from 'react';
import './Conditions.css';

export const Conditions = ({conditions}) => {
    const {feels_like, humidity, wind, pressure} = conditions;

    return (
        <div className='Conditions'>
            <div className='condition col'>
                <span>{Math.floor(feels_like)}°F</span>
                <span>Heat Index</span>
            </div>
            <div className='condition col'>
                <i class="fas fa-wind"></i>
                <span>{wind.speed} MPH</span>
            </div>
            <div className='condition col'>
                <span>{humidity}%</span>
                <span>Humidity</span>
            </div>
            <div className='condition col'>
                <span>{pressure} hPa</span>
                <span>Pressure</span>
            </div>
        </div>
    );
};