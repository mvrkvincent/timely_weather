import React from "react";
import {CONDITION_PROPS} from '../utils/conditionProps';
import './Current.css';

export const Current = ({ current }) => {
    const icon = CONDITION_PROPS[current.icon].ico;

    return (
        <div className='Current'>
            <h1>Currently</h1>
            <i class={`${icon}`} />
            <span>{current.description}</span>
        </div>
    );

};