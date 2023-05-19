import React from 'react'
import { useState} from 'react'
import { useRef } from 'react'
import './Main.css'


export const Main = () => {
  const [sentence, setSentence] = useState('');
  const wordInputRef = useRef();

  const addWord = () => {
    const newWord = wordInputRef.current.value;
    setSentence(prevSentence => prevSentence + ' ' + newWord);
    wordInputRef.current.value = '';
  };

  const resetSentence = () => {
    setSentence('');
    wordInputRef.current.value = '';
  };

  return (
    <div>
      <h1>Sentence Builder</h1>
      <div>
        <label htmlFor="wordInput">Add Word:</label>
        <input type="text" id="wordInput" ref={wordInputRef} />
        <button onClick={addWord}>Add Word</button>
        <button onClick={resetSentence}>Reset</button>
      </div>
      <p>{sentence}</p>
    </div>
  );
};

export default Main;


