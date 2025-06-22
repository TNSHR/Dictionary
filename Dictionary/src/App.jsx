import React, { useState } from "react";
import "./App.css";

function App() {
  const [dictionary] = useState([
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [definition, setDefinition] = useState("");
  const [notFound, setNotFound] = useState(false);

  const handleSearch = () => {
    const lowerSearch = searchTerm.trim().toLowerCase();

    const found = dictionary.find(
      (item) => item.word.toLowerCase() === lowerSearch
    );

    if (found) {
      setDefinition(found.meaning);
      setNotFound(false);
    } else {
      setDefinition("");
      setNotFound(true);
    }
  };

  return (
    <div className="container">
      <h1>Dictionary App</h1> {/* 🔧 Required for test to pass */}

      <input
        type="text"
        placeholder="Enter a word"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {definition && (
        <div>
          <h3>Definition:</h3>
          <p>{definition}</p>
        </div>
      )}

      {notFound && (
        <div>
          <p>Word not found in the dictionary.</p> {/* 🔧 Exact match required */}
        </div>
      )}
    </div>
  );
}

export default App;
