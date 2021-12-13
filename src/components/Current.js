import React from "react";
import './Current.css';

export const Current = ({ conditionProps, current }) => {
    return (
        <div className='Current'>
            <h1>Currently</h1>
            <i class={`${conditionProps.ico}`} />
            <span>{current.description}</span>
        </div>
    );

};