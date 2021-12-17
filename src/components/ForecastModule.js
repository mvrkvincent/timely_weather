import React from 'react';
import {CONDITION_PROPS} from '../utils/conditionProps';

export const ForecastModule = ({day}) => {
    const date = new Date(day.dt * 1000).toString().split(' ')[0];
    const weather = day.weather[0];
    const icon = CONDITION_PROPS[weather.icon].ico;

    return(
        <div className='ForecastModule'>
            <span className='date'>{date}</span>
            <i class={`${icon}`} />
            <span>{Math.floor(day.temp.min)}°F / {Math.floor(day.temp.max)}°F</span>
        </div>
    );
};