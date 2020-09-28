import React from 'react';

 function CurrentSong(props) {
    const { songIndex } = props;
    return(
        <div className="song-page">
            <h1 style={{ textAlign: "center" }} >{props.songsState.songs_list[songIndex].name}</h1>
            <img />
            <audio controls="seeking" className="music-player"  src={props.songsState.songs_list[songIndex].url} ></audio>
        </div>
    )
}

export default CurrentSong;