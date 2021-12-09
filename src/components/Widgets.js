import React, { useEffect } from "react";
import {connect} from "react-redux";
import {fetchInitialWeather} from "../actions/weather_actions";
import './Widgets.css';

const Widgets = ({location, fetchInitialWeather}) => {

    return(
        <div className='Widgets'>

        </div>
    );
};

const msp = ({location}) => ({
    location: location,
});

const mdp = dispatch => ({
    fetchInitialWeather: coord => dispatch(fetchInitialWeather(coord))
});

export default connect(msp,mdp)(Widgets);