import React from "react";
import {connect} from "react-redux";
import Current from './Current';
import './Widgets.css';

const Widgets = () => {


    return(
        <div className='Widgets'>
            <Current />
        </div>
    );
};

const msp = ({weather}) => ({

});

const mdp = dispatch => ({

});

export default connect(msp,mdp)(Widgets);