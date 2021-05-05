import React, {useRef, useState} from 'react';

import './styles/app.scss';

import Player from "./components/player";
import Song from "./components/song";
import Library from "./components/library";

import data from './util';

function App() {
    //Ref
    const audioRef = useRef(null);
    //State
    const [songs, setSongs] = useState(data());
    const [currentSong, setCurrentSong] = useState(songs[0]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0,
    });

    const timeUpdateHandler = (e) => {
        const current = e.target.currentTime;
        const duration = e.target.duration;
        setSongInfo({...songInfo, currentTime: current, duration});
    };

    return (
        <div className="App">
            <Song currentSong={currentSong}/>
            <Player
                audioRef={audioRef}
                setIsPlaying={setIsPlaying}
                isPlaying={isPlaying}
                currentSong={currentSong}
                setSongInfo={setSongInfo}
                songInfo={songInfo}/>
            <Library
                audioRef={audioRef}
                songs={songs}
                setCurrentSong={setCurrentSong}
                isPlaying={isPlaying}/>
            <audio
                ref={audioRef}
                src={currentSong.audio}
                onLoadedMetadata={timeUpdateHandler}
                onTimeUpdate={timeUpdateHandler}></audio>
        </div>
    );
}

export default App;
