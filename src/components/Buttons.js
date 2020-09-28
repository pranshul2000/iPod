import React from "react";

function Buttons(props) {
  return (
    <React.Fragment>
      <div className="buttons-sub-container">
        <button className="menu-button" onClick={props.menuButtonClickEvent} >Menu</button>
        <button className="prev-button" onClick={props.prevButtonClickEvent}><i class="fas fa-backward"></i></button>
        <button className="select-button" onClick={props.selectButtonClickEvent}> Select</button>
        <button className="next-button " onClick={props.nextButtonClickEvent} >
          <i class="fas fa-forward"> </i>
        </button>
        <button className="play-pause-button" onClick={props.playPauseClickEvent} >
        {props.state.currently_playing === false && <i class="far fa-play-circle"></i>}
        {props.state.currently_playing  && <i class="fas fa-pause"></i>}
            
        </button>
      </div>
    </React.Fragment>
  );
}

export default Buttons;
