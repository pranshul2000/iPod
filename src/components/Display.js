import React from 'react';
import Coverflow from './CoverFlow';
import Music from './Music';
import Games from './Games';
import Settings from './Settings';
import Menu from './Menu'
import Artists from './Artists'
import Albums from './Albums'
import Favourites from './Favourites'


function Display(props) {
    const { state } = props;
    // console.log(state)
    return (
        <React.Fragment>
        <Menu
          state={state} 
        />
        {state.main_menu_active && state.component_no === 0? <Coverflow /> : ''}
        {state.main_menu_active && state.component_no === 2? <Games /> : ''}
        {state.main_menu_active && state.component_no === 3? <Settings /> : ''}
        {state.music_menu_active && state.component_no === 0? <Music state={state}/> : ''}
        {state.music_menu_active && state.component_no === 1? <Artists /> : ''}
        {state.music_menu_active && state.component_no === 2? <Albums /> : ''}
        {state.music_menu_active && state.component_no === 3? <Favourites /> : ''}
        </React.Fragment>
    )
}

export default Display;
