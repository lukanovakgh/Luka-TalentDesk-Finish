import React, { useState } from 'react';
import { calculateResult, detectSums } from './utils';
import { samples } from './constants';
import './App.css';

const App = () => {
  const [sample, setSample] = useState(null);
  const [text, setText] = useState('');
  const [input, setInput] = useState([]);
  const [result, setResult] = useState([]);
  const [error, setError] = useState('');

  const handleChange = (event) => {
    setSample(null);
    const { value } = event.target;
    setText(value);
    const data = calculateResult(value);
    setInput(data.input);
    setError(data.error);
    setResult([]);
  };

  const onResult = () => {
    if (!error) {
      const res = detectSums(input);
      setResult(res);
    }
  };

  const handleSampleButton = (sampleId) => {
    setSample(sampleId);
    const sampleText = samples[sampleId];
    setText(sampleText);
    const data = calculateResult(sampleText);
    setInput(data.input);
    setError(data.error);
    const res = detectSums(data.input);
    setResult(res);
  };

  return (
    <div className="App">
      <div className="App-form">
        <div className="complexity">
          <div className="complexity-item">Time Complexity: O(n3)</div>
          <div className="complexity-item">Memory Complexity: 4n</div>
        </div>
        <div className="sample-list">
          <div className="sample-case">
            <div className="case-label">Sample of Simple Cases </div>
            <div className="sample-button-list">
              <div
                className={`sample-button${sample === 0 ? ' active' : ''}`}
                onClick={() => handleSampleButton(0)}
              >
                Case 1
              </div>
              <div
                className={`sample-button${sample === 1 ? ' active' : ''}`}
                onClick={() => handleSampleButton(1)}
              >
                Case 2
              </div>
              <div
                className={`sample-button${sample === 2 ? ' active' : ''}`}
                onClick={() => handleSampleButton(2)}
              >
                Case 3
              </div>
            </div>
          </div>
          <div className="sample-case">
            <div className="case-label">Sample of Large Cases</div>
            <div className="sample-button-list">
              <div
                className={`sample-button${sample === 3 ? ' active' : ''}`}
                onClick={() => handleSampleButton(3)}
              >
                Case 1
              </div>
              <div
                className={`sample-button${sample === 4 ? ' active' : ''}`}
                onClick={() => handleSampleButton(4)}
              >
                Case 2
              </div>
              <div
                className={`sample-button${sample === 5 ? ' active' : ''}`}
                onClick={() => handleSampleButton(5)}
              >
                Case 3
              </div>
            </div>
          </div>
        </div>
        <div className="input-wrapper">
          <span className="input-label">Input: </span>
          <input className="input-pan" type="text" value={text} onChange={handleChange} />
          <span className="input-rule">Enter the Input Value!!! ( number array )</span>
          { error &&
          <div className="input-error">
            {error}
          </div>
          }
        </div>

        <div className="result-layer">
          <span onClick={onResult} className="result-button">Result</span>
          <span className="result-pair">{result.length} PAIRS</span>
          <div className="result-list">
            {result.map((res, index) => {
              const present = `{ pA: ${res.pA}, pB: ${res.pB}, sum: ${res.sum} }`;
              return <span className="result-item" key={index}>{present}</span>
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
