import React from "react";
import './Temp.css';

export const Temp = ({feel}) => {
    const {temp_min, temp, temp_max} = feel;
    const low = `${Math.floor(temp_min)}°F`;
    const now = `${Math.floor(temp)}°F`;
    const high = `${Math.floor(temp_max)}°F`;

    return(
        <div className='Temp'>
            <span className="range"><i class="fas fa-arrow-up" /> {low}</span>
            <span>{now}</span>
            <span className="range"><i class="fas fa-arrow-down" /> {high}</span>
        </div>
    );

};
