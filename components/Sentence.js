import { useState, useEffect } from "react";

const data = [
  {
    id: "1",
    sentence: "hey jude",
    startAt: 2000 // millionseconds
  },
  {
    id: "2",
    sentence: "",
    startAt: 3000 // millionseconds
  },
  {
    id: "3",
    sentence: `Don't be afraid`,
    startAt: 6000 // millionseconds
  },
  {
    id: "4",
    sentence: `You were made to go out and get her.`,
    startAt: 7000 // millionseconds
  },
  {
    id: "5",
    sentence: `The minute you let her under your skin,`,
    startAt: 7800 // millionseconds
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
  height: "100px",
  background: "rgba(0, 0, 0, .6)",
  overflowY: "auto"
};

const Lyrics = () => {
  return (
    <div style={lyricsScrollBox}>
      {data.map((l) => (
        <Sentence
          key={l.id}
          content={l.sentence}
          isActive={l.startAt === 6000}
        />
      ))}
    </div>
  );
};

export default Lyrics;
