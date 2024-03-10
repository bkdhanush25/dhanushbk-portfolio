"use client";
import React, {useState} from 'react'

const GetAdminInput = () => {

    const [inputValue, setInputValue] = useState<string>('');
  const [formattedParagraphs, setFormattedParagraphs] = useState<JSX.Element[]>([]);

  const submitParagraphs = () => {
    const paragraphArray = inputValue.split('\n'); // Split input by new lines

    // Format each paragraph with <p> tags and join with <br> tags
    const formatted = paragraphArray.map((paragraph, index) => (
      <React.Fragment key={index}>
        <p>{paragraph}</p>
        <br /> {/* Use <br> for new lines */}
      </React.Fragment>
    ));

    setFormattedParagraphs(formatted);
  };


  return (
    <div>
      <label htmlFor="paragraphs">Enter multiple paragraphs:</label><br />
      <textarea
        id="paragraphs"
        name="paragraphs"
        rows={10}
        cols={50}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></textarea><br />
      <button onClick={submitParagraphs}>Submit</button>

      <div>{formattedParagraphs}</div>
    </div>
  )
}

export default GetAdminInput