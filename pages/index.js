import Link from "next/link";
import Lyrics from "../components/Sentence";
import exampleSong from "../assets/Shaolin_Dub_FootSoldier.mp3";

export default function IndexPage() {
  return (
    <div>
      <audio controls>
        <source src={exampleSong} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <Lyrics />
    </div>
  );
}
