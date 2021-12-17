import React, { useEffect } from "react";
import {connect} from "react-redux";
import {ForecastModule} from "./ForecastModule";
import { fetchCurrentForecast } from "../actions/weather_actions";

const Forecast = ({location, forecast, fetchCurrentForecast}) => {
    const {lat, lon} = location;

    const generateForecastModules = () => {
        return forecast.slice(0,5).map((day, i) => <ForecastModule key={i} day={day} />);
    };

    useEffect(() => {
        fetchCurrentForecast(lat, lon)
    }, [lat, lon, fetchCurrentForecast])

    return(
        <div className="Forecast">
            {generateForecastModules()}
        </div>
    )
};

const msp = ({user, weather}) => ({
    location: user.location,
    forecast: weather.forecast || [],
});

const mdp = dispatch => ({
    fetchCurrentForecast: (lat,lon) => dispatch(fetchCurrentForecast(lat,lon)),
});

export default connect(msp, mdp)(Forecast);