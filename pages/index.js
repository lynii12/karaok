import Lyrics from "../components/Sentence";
import exampleSong from "../assets/Shaolin_Dub_FootSoldier.mp3";
import { useRef, useEffect, useState } from "react";

export default function IndexPage() {
  const ref = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);

  const onTimeUpdate = (e) => {
    console.log(e.target.currentTime);
    setCurrentTime(e.target.currentTime);
  };
  return (
    <div>
      <audio controls ref={ref} onTimeUpdate={onTimeUpdate}>
        <source src={exampleSong} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <Lyrics currentTime={currentTime} />
    </div>
  );
}
