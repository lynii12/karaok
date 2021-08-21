import { forwardRef, useEffect, useState } from "react";

// TODO: 加字幕
const data = [
  {
    id: "start",
    sentence: "",
    endAt: 6.941222 // seconds
  },
  {
    id: "1",
    sentence: "duh duh duh....",
    endAt: 12.703968 // seconds
  },
  {
    id: "2",
    sentence: "",
    endAt: 33.479739
  },
  {
    id: "3",
    sentence: "duh duh duh....",
    endAt: 34.460548
  },
  {
    id: "4",
    sentence: `Another guy has close my class`,
    endAt: 37.228275
  },
  {
    id: "5",
    sentence: `do not worry Im bluh bluh bluh`,
    endAt: 39.906983
  },
  {
    id: "6",
    sentence: "I can be everything like I can want",
    endAt: 43.798568
  }
];

const sentenceStyle = {
  color: "#888",
  fontWeight: "normal",
  textAlign: "center"
};

const sentenceActiveStyle = {
  ...sentenceStyle,
  color: "white",
  fontWeight: 400
};

const Sentence = ({ id, content, isActive }) => {
  return (
    <p style={isActive ? sentenceActiveStyle : sentenceStyle}>{content}</p>
  );
};

const lyricsScrollBox = {
  width: "100%",
  height: "400px",
  background: "rgba(0, 0, 0, .6)",
  overflowY: "auto"
};

const Lyrics = ({ currentTime }) => {
  const currentSentence = data.find((d) => d.endAt >= currentTime) || {};

  return (
    <div style={lyricsScrollBox}>
      {data.map((l) => (
        <Sentence
          key={l.id}
          content={l.sentence}
          isActive={l.id === currentSentence.id}
        />
      ))}
    </div>
  );
};

export default Lyrics;
