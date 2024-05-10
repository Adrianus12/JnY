import { useEffect, useState } from "react";
import { useRef } from "react";
import bgm from "./wed-assets/Yura Yunita - Duhai Sayang.mp3";

const BackgroundMusic = () => {

    const audioRef = useRef(null);
    const [played, setPlayed] = useState(false);
    const [muted, setMuted] = useState(false);

    const handleMuteAudio = () => {

      audioRef.current.muted = !audioRef.current.muted;
      setMuted(audioRef.current.muted);

    };

    useEffect(() => {
        
        if (!audioRef.current) return;

        audioRef.current.defaultMuted = true;
        audioRef.current.src=bgm;
        
        const clickPlayAudioListener = () => {
            if (audioRef.current.paused) {
                audioRef.current.muted = false;
                audioRef.current.play();
                setPlayed(true);
            }
        };
        audioRef.current.play().catch(() => {
           document.addEventListener("click", clickPlayAudioListener);
        });
        
        return () => {
            document.removeEventListener("click", clickPlayAudioListener);
        };

    }, [])

    return (

        <>
            <audio ref={audioRef} autoPlay loop muted className="bgm-audio" />
            <button className={`bgm-button-mute ${played ? "visible" : "hidden"}`} onClick={handleMuteAudio}>
                {muted ? <MuteIcon /> : <UnmuteIcon />}
            </button>
        </>

    );
}

function MuteIcon() {
    

    return (

        <svg width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g>
                <line fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="3" x2="21" y1="3" y2="21"/>
                <polyline fill="none" points="9.9 5.5 12 3 12 21 7 16 2 16 2 9 3 9 7 9 8 9" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                <path d="M21.4,16a8.5,8.5,0,0,0,1.1-4.2c0-4.3-3.1-7.8-7-7.8" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                <path d="M15.5,20.5a5.2,5.2,0,0,0,3-1" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                <path d="M18.3,13a2.7,2.7,0,0,0,.2-1.1,2.9,2.9,0,0,0-3-2.9" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
            </g>
        </svg>

    ); 

}

function UnmuteIcon() {
    

    return (

        <svg width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <polygon fill="none" points="2.9 9 6.9 9 11.9 3 11.9 21 6.9 16 1.9 16 1.9 9 2.9 9" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
            <path d="M15.5,19.5a7.3,7.3,0,0,0,7-7.5,7.3,7.3,0,0,0-7-7.5" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
            <path d="M15.5,15a3,3,0,0,0,0-6" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
        </svg>

    );
}

export default BackgroundMusic;