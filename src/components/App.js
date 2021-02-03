import React from "react";
import ZingTouch from "zingtouch";
import Display from "./Display";
import Buttons from "./Buttons";
import $ from "jquery";

class App extends React.Component {
  constructor() {
    super();
    this.angle_change = 0;
    this.currenty_on = 0;
    this.current_song_movement = 0;
    this.length = 0;
    this.state = {
      main_menu_list: ["CoverFlow", "Music", "Games", "Settings"],
      main_menu_current: 0,
      main_menu_active: true,
      music_menu_list: ["All Songs", "Artists", "Albums", "Fav", "Back"],
      music_menu_current: 0,
      music_menu_active: false,
      component_no: -1,
      song_option: -1,
      song_index: -1,
      currently_playing: false,
    };
  }

  componentDidMount() {
    //   setting up the ZingTouch
    console.log($(".buttons-sub-container")[0]);
    var zt = new ZingTouch.Region($(".buttons-sub-container")[0]);
    let rotatingElement = $(".buttons-sub-container")[0];
    zt.bind(rotatingElement, "rotate", (event) => {
      let distance = event.detail.distanceFromLast;
      this.angle_change += distance;
      this.length = this.state.main_menu_active
        ? this.state.main_menu_list.length
        : this.state.music_menu_list.length;

      // cases for the shifting of the active option
      if (this.angle_change >= 60) {
        this.currenty_on++;
        this.currenty_on = this.currenty_on % this.length;

        if (this.state.main_menu_active) {
          this.setState({
            main_menu_current: this.currenty_on,
          });
        }

        if (this.state.music_menu_active) {
          this.setState({
            music_menu_current: this.currenty_on,
          });
        }

        this.angle_change = 0;
      } else if (this.angle_change <= -60) {
        this.currenty_on--;
        if (this.currenty_on === -1) {
          this.currenty_on = this.length - 1;
        }
        if (this.state.main_menu_active) {
          this.setState({
            main_menu_current: this.currenty_on,
          });
        }

        if (this.state.music_menu_active) {
          this.setState({
            music_menu_current: this.currenty_on,
          });
        }
        this.angle_change = 0;
      }
    });
  }

  //   to show and hide menu
  menuButtonClickEvent = () => {
    $(".display-items").toggleClass("width-50");
  };

  selectButtonClickEvent = () => {
    //   to move from staring options to music options
    if (this.state.main_menu_active && this.state.main_menu_current === 1) {
      this.setState({
        music_menu_active: true,
        main_menu_active: false,
        main_menu_current: 0,
        music_menu_current: 0,
      });
      //   this.menuButtonClickEvent();
    }
    //   console.log('state', this.state);
    if (this.state.music_menu_active && this.state.music_menu_current === 4) {
      this.setState({
        music_menu_active: false,
        main_menu_active: true,
        song_option: -1,
        main_menu_current: 0,
        music_menu_current: 0,
        component_no: -1,
        song_option: -1,
        song_index: -1,
      });
      return;
    }
    if (this.state.main_menu_active && this.state.main_menu_current !== 1) {
      this.setState({
        component_no: this.state.main_menu_current,
      });
      this.menuButtonClickEvent();
    }
    if (this.state.music_menu_active && this.state.music_menu_current !== 4) {
      this.setState({
        component_no: this.state.music_menu_current,
      });
      this.menuButtonClickEvent();
    }
    // to to play the selected song
    if (this.state.music_menu_active && this.state.music_menu_current === 0) {
      if ($(".display-items .width-50").length === 0) {
        this.setState({
          song_index: this.state.song_option,
        });
        this.menuButtonClickEvent();
        return;
      }
    }
  };
  // buttons to change songs
  nextButtonClickEvent = () => {
    // initals conditions are to ensure that we are on the requied page
    if (this.state.music_menu_active && this.state.music_menu_current === 0) {
      if ($(".display-items .width-50").length === 0) {
        this.current_song_movement = this.state.song_option;
        this.current_song_movement++;
        this.current_song_movement = this.current_song_movement % 7;
        this.setState({
          song_option: this.current_song_movement,
        });
      }
    }
  };

  prevButtonClickEvent = () => {
    if (this.state.music_menu_active && this.state.music_menu_current === 0) {
      if ($(".display-items .width-50").length === 0) {
        this.current_song_movement = this.state.song_option;
        this.current_song_movement--;
        this.current_song_movement = (this.current_song_movement + 7) % 7;
        this.setState({
          song_option: this.current_song_movement,
        });
      }
    }
  };

  // toggle play pause button and play or pause song
  playPauseClickEvent = () => {
    // conditions in order to ensure we are on the playing song page
    if (this.state.music_menu_active && this.state.music_menu_current === 0) {
      if ($(".display-items .width-50").length === 0) {
        if (
          $(".music-player")[0].paused !== undefined &&
          $(".music-player")[0].paused
        ) {
          $(".music-player")[0].play();
          this.setState({
            currently_playing: true,
          });
        } else {
          $(".music-player")[0].pause();
          this.setState({
            currently_playing: false,
          });
        }
      }
    }
  };

  render() {
    return (
      <div id="ipod-container">
        <div id="display">
          <Display state={this.state} />
        </div>
        <Buttons
          state={this.state}
          playPauseClickEvent={this.playPauseClickEvent}
          selectButtonClickEvent={this.selectButtonClickEvent}
          menuButtonClickEvent={this.menuButtonClickEvent}
          nextButtonClickEvent={this.nextButtonClickEvent}
          prevButtonClickEvent={this.prevButtonClickEvent}
        />
      </div>
    );
  }
}

export default App;
