import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import { fetchInitialLocation } from '../actions/location_actions';
import './Nav.css';

const Nav = ({location, fetchInitialLocation}) => {

    let lastUpdated = new Date(location?.timestamp).toLocaleTimeString();

    useEffect(() => {
        fetchInitialLocation()
    }, [fetchInitialLocation])

    return(
        <div className='Nav'>
            <div className='col'>
                <span>{location?.lat}</span>
                <span className='sub'>Location</span>
            </div>
            <h1>TimelyWEATHER</h1>
            <div className='col'>
                <span>{lastUpdated}</span>
                <span className='sub'>Last Updated</span>
            </div>
        </div>
    );
};

const msp = ({location}) => ({
    location: location,
});

const mdp = dispatch => ({
    fetchInitialLocation: () => dispatch(fetchInitialLocation()),
});

export default connect(msp, mdp)(Nav);