import React from "react";

function Menu(props) {
  const { state } = props;
  return (
    <div className="display-items">
        {state.main_menu_active && <div className="menu-divs">iPod</div>}
        {state.music_menu_active && <div className="music-divs">iPod</div>}
      
      {state.main_menu_active && state.main_menu_list.map((value, key) => {
          return (
            <div className={state.main_menu_current === key ? "current-option menu-divs" : "menu-divs"} key={value}>
              <p>{value}</p>
            </div>
          );
        })}
      {state.music_menu_active && state.music_menu_list.map((value, key) => {
          return (
            <div className={state.music_menu_current === key ? "current-option music-divs" : "music-divs"} key={value}>
              <p>{value}</p>
            </div>
          );
        })}
    </div>
  );
}

export default Menu;
