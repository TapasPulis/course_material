import React, { useState, useEffect, useRef } from "react";

const PersonalGreetingCard = () => {
  const [name, setName] = useState<string>("");
  const [mood, setMood] = useState<string>("");
  useEffect(() => {
    document.title = `Hi ${name} ${mood}`;
  }, [name, mood]);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleMoodChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setMood(event.target.selectedOptions[0].textContent);
  };
  const handleReset = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    setName("");
    setMood("");
  };
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  return (
    <div>
      <label>Type your name:</label>
      <br />
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        ref={inputRef}
      />
      <br />
      <label>What is your mood right now:</label>
      <br />
      <select onChange={handleMoodChange} defaultValue="placeholder">
        <option value="placeholder" disabled>
          Please select your mood
        </option>
        <option value="happy">😀</option>
        <option value="angry">😤</option>
        <option value="tired">😴</option>
        <option value="cool">😎</option>
      </select>
      <p>
        Hi {name} {mood}
      </p>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default PersonalGreetingCard;
