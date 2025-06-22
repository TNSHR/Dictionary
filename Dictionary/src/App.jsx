import React, { useState } from "react";
import "./App.css";

function App() {
  const [dictionary] = useState([
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState("");

  const handleSearch = () => {
    const term = searchTerm.trim().toLowerCase();

    const found = dictionary.find(
      (item) => item.word.toLowerCase() === term
    );

    if (found) {
      setResult(found.meaning);
    } else {
      setResult("Word not found in the dictionary.");
    }
  };

  return (
    <div className="container">
      <h1>Dictionary App</h1>

      <input
        type="text"
        placeholder="Enter a word"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />
      <button onClick={handleSearch}>Search</button>

      {/* Always render this block for UI test compatibility */}
      <div>
        <h3>Definition:</h3>
        <p>{result}</p>
      </div>
    </div>
  );
}

export default App;
