import logo from "./logo.svg";
import "./App.css";
import React, { useState, useMemo } from 'react';
import winkNLP from 'wink-nlp';
import model from 'wink-eng-lite-web-model';


const nlp = winkNLP(model);
const its = nlp.its;

function App() {
  
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const handleDecision = () => {
    // 1. Process the text
    const doc = nlp.readDoc(input);
    
    // 2. Get the sentiment score (-1 to 1)
    // Positive values = Happy/Agree, Negative = Sad/Disagree
    const score = doc.out(its.sentiment);
    
    // 3. Decision Logic based on "Mood"
    let decision = "";
    if (score > 0.2) {
      decision = "You sound positive! Let's proceed with the 'Growth' plan. 🚀";
    } else if (score < -0.2) {
      decision = "I detect some concerns. Should we switch to the 'Safe' strategy? 🛡️";
    } else {
      decision = "Your input is neutral. We'll stick to the 'Standard' path. ⚖️";
    }

    setResult({ score, decision });
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px' }}>
      <h2>Decision Engine</h2>
      <input type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="How do you feel about the project?"
        rows="4"
        style={{ width: '100%', marginBottom: '10px' }}
      />
      <button onClick={handleDecision} type="submit   ">Analyze & Decide</button>

      {result && (
        <div style={{ marginTop: '20px', borderTop: '1px solid #ccc', paddingTop: '10px' }}>
          <p><strong>Sentiment Score:</strong> {result.score}</p>
          <p><strong>Recommendation:</strong> {result.decision}</p>
        </div>
      )}
    </div>
  );

}

export default App;
