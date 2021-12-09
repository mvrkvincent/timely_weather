import React from 'react';
import {Provider} from 'react-redux';
import Nav from './components/Nav'
import './App.css';

const App = ({store}) => {
    return(
        <Provider store={store}>
            <div className='App'>
                <Nav />
                <div className='data-grid'>

                </div>
            </div>
        </Provider>
    )
}

export default App;