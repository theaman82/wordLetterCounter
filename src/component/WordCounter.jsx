import React, { useState } from "react";

const WordCounter = () => {
  const [wordCount, setWordCount] = useState(0);
  const [characterCount, setCharacterCount] = useState(0);
  const [countVowelsData, setCountVowelsData] = useState(0);
  let [data, setData] = useState("");
  const [spaceCount, setSpaceCount] = useState(0)

  function countVowels(str) {
    let countVol = str.match(/[aeiou]/gi);

    return countVol ? countVol.length : 0;
  }

  const handleCount = (e) => {
    let text = e.target.value;
    if (text.length != 255) {
      setData(text);
      setWordCount(text.split(/\s+/).filter(Boolean).length);
      setCharacterCount(text.length);
      setCountVowelsData(countVowels(text));
      setSpaceCount((text.match(/\s/g) || []).length);
    }
  };
  return (
    <div>
      <h1 className="flex justify-center items-center bg-slate-600 text-white font-bold text-2xl rounded">
        Word & letter Counter
      </h1>
      <textarea
        rows={10}
        cols={70}
        onChange={handleCount}
        value={data}
        className={`border text-white text-xl p-2 rounded ${
          data.length >= 254 ? "bg-red-700" : "bg-slate-700"
        }`}
      ></textarea>
      <div className="flex flex-1 flex-col bg-slate-600 text-white p-2 rounded text-lg">
        <p>Total Words: {wordCount}</p>
        <p>Total Character: {characterCount}</p>
        <p>Total Vowels: {countVowelsData}</p>
        <p>Total space you press: {spaceCount}</p>
        <p>
          {data.length >= 255
            ? "limit crosed"
            : `You can only write 255 character`}
        </p>
      </div>
    </div>
  );
};

export default WordCounter;

// i want to freeze after 255 character
// backspace problem
// space count
// after 255 word bg-red
