import React from "react";
import { connect } from "react-redux";
import './Current.css';

const Current = ({ current }) => {

    return (
        <div className='Current'>
            <h1>Currently</h1>
            <img src={`http://openweathermap.org/img/w/${current?.icon}.png`} alt='Open Weather Icon'></img>
            <span>{current?.description}</span>
        </div>
    )
}

const msp = ({weather}) => ({
    current: weather?.current,
})

export default connect(msp, null)(Current)