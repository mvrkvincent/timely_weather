import React from "react";
import {connect} from "react-redux";
import './Widgets.css';

const Widgets = () => {


    return(
        <div className='Widgets'>

        </div>
    );
};

const msp = ({weather}) => ({

});

const mdp = dispatch => ({

});

export default connect(msp,mdp)(Widgets);