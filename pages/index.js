import Link from "next/link";
import Lyrics from "../components/Sentence";

export default function IndexPage() {
  return (
    <div>
      <audio controls>
        <source src="horse.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <Lyrics />
    </div>
  );
}
