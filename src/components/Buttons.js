import React from 'react';

function Buttons() {
    return (
        <React.Fragment>
            <div className="buttons-sub-container">
                <div className="menu-button position-abs">
                    Menu
                </div>
                <div className="prev-button position-abs">
                    <i class="fas fa-backward"></i>
                </div>
                <div className="select-button position-abs">

                </div>
                <div className="next-button position-abs">
                    <i class="fas fa-forward"></i>
                </div>
                <div className="playPause-button position-abs">
                    <i class="far fa-play-circle"></i>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Buttons;
