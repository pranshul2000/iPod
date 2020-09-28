import React from 'react';
import * as firebase from 'firebase'
import CurrentSong from './CurrentSong'

class Music extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            songs_list: [],
            Internet: false,
            checker: false
        }
    }
    componentDidMount(){
        firebase
          .firestore()
          .collection('music')
          .get()
          .then((snapshot) => {
              console.log(snapshot);

              snapshot.docs.map((doc) => {
                //   console.log(doc.data());
              });
              
              const songs = snapshot.docs.map((doc) => {
                  return doc.data();
              })
              this.setState({
                 songs_list: songs,
                 checker: true,
                 internet: true
                 
              })
          })
    }

    render(){
        if(this.props.state.song_index !== -1 && this.state.checker){
            return (
                <CurrentSong songsState={this.state} songIndex={this.props.state.song_index} />
            )
        }else if(this.state.internet){
            return(
                <div className='songs-list-container'>
                    <h4  className="songs-list">Songs</h4>
                    {this.state.songs_list.map((value, key) =>{
                        return(
                            <div  className={this.props.state.song_option === key?  "songs current-song" : "songs"}>
                                {value.name}
                            </div>
                        )
                    })}
                </div>
            )
        }else{
            return(
            <div>
                Loading...
                <br />
                Pls check your Internet Connection
            </div>
            )
        }
    }
}
export default Music;