import React from "react";
import {connect} from "react-redux";
import {Current} from './Current';
import {Temp} from './Temp';
import {Conditions} from "./Conditions";
import './Widgets.css';

const Widgets = ({current, feel, wind}) => {

    const generateWidgets = () => {
        return(
            <div className='Widgets'>
                <Temp feel={feel}/>
                <div className="now">
                    <Current current={current}/>
                    <Conditions conditions={{...feel, wind,}}/>
                </div>
            </div>
        );
    };

    const generateLoad = () => {
        return(
            <div className="Loading">
                <div className="animation" />
                <span>Fetching Your Weather</span>
            </div>
        );
    };

    return(
        <>
            {current ? generateWidgets() : generateLoad()}
        </>
    );
};

const msp = ({weather}) => ({
    feel: weather.feel,
    wind: weather.wind,
    current: weather.current,
});

const mdp = dispatch => ({

});

export default connect(msp,mdp)(Widgets);