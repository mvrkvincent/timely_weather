import React from 'react';
import {CONDITION_PROPS} from '../utils/conditionProps';

export const ForecastModule = ({day}) => {
    const date = new Date(day.dt * 1000).toLocaleDateString();
    const weather = day.weather[0];
    const icon = CONDITION_PROPS[weather.icon].ico;

    return(
        <div className='ForecastModule'>
            <span>{date}</span>
            <i class={`${icon}`} />
            <span>{Math.floor(day.temp.min)}°F / {Math.floor(day.temp.max)}°F</span>
        </div>
    );
};