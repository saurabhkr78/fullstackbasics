import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [words, setWords] = useState([]);

  // Fetch words from the server when the component mounts
  useEffect(() => {
    axios
      .get("/api/words") // Using the proxy configuration
      .then((response) => setWords(response.data))
      .catch((error) => console.error("Error fetching words:", error));
  }, []);

  return (
    <>
      <h1>Chai and Full Stack</h1>
      <p>Words: {words.length}</p>
      {words.map((word, index) => (
        <div key={index}>
          <h3>{word.word}</h3>
          <p>{word.definition}</p>
        </div>
      ))}
    </>
  );
}

export default App;
