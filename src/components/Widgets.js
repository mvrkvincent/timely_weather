import React from "react";
import {connect} from "react-redux";
import {Current} from './Current';
import {Temp} from './Temp';
import {Conditions} from "./Conditions";
import {CONDITION_PROPS} from '../utils/conditionProps';
import Forecast from "./Forecast";
import './Widgets.css';
import './Forecast.css';

const Widgets = ({current, feel, wind}) => {
    const conditionProps = CONDITION_PROPS[current?.icon];
    const style = current?.icon ? {backgroundImage: `${conditionProps?.color}`} : {};


    const generateWidgets = () => {
        return(
            <>
                <Temp feel={feel}/>
                <div className='display'>
                    <div className="now">
                        <Current 
                            current={current}
                        />
                        <Conditions conditions={{...feel, wind,}}/>
                    </div>
                    <Forecast />
                </div>
            </>
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
        <div className="Widgets" style={style}>
            <div></div>
            {current ? generateWidgets() : generateLoad()}
            <footer>
                <span>Built by <a href='https://mvrk.dev'> Mark Vincent </a> in Brooklyn, NY</span>
                <a href='https://github.com/mvrkvincent/timely_weather'><i class="fab fa-github" /> Project Repo</a>
            </footer>
        </div>
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