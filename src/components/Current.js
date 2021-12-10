import React from "react";
import './Current.css';

export const Current = ({ current }) => {

    return (
        <div className='Current'>
            <h1>Currently</h1>
            <img src={`http://openweathermap.org/img/w/${current?.icon}.png`} alt='Open Weather Icon'></img>
            <span>{current?.description}</span>
        </div>
    );

};