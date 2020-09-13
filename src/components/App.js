import React from 'react';
import Display from './Display';
import Buttons from './Buttons';

function App() {
    return (
        <div id="ipod-container" >
            <div id="display" >
                <Display />
            </div>
            <div id="action-buttons" >
                <Buttons />
            </div>
        </div>
    );
}

export default App;
