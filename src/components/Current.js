import React from "react";
import {returnConditionProps} from '../utils/conditionProps'
import './Current.css';

export const Current = ({ current }) => {
    const conditionProps = returnConditionProps();
    const icon = conditionProps[current.icon].ico;


    return (
        <div className='Current'>
            <h1>Currently</h1>
            <i class={`${icon}`} />
            <span>{current?.description}</span>
        </div>
    );

};