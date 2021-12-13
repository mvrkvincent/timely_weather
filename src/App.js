import React from 'react';
import {Provider} from 'react-redux';
import Nav from './components/Nav';
import Widgets from './components/Widgets';
import './App.css';

const App = ({store}) => {
    return(
        <Provider store={store}>
            <div className='App'>
                <Nav />
                <Widgets />
            </div>
        </Provider>
    );
};

export default App;