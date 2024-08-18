import React, { useState, useEffect, useRef } from 'react';
import Stockfish from 'stockfish';


const EvalBar = ({ fen }) => {
  const [evaluation, setEvaluation] = useState(0);
  const stockfishRef = useRef<Worker | null>(null);

  useEffect(() => {
    // Initialize Stockfish as a Web Worker
    stockfishRef.current = Stockfish();
    stockfishRef.current.onmessage = function(e) {
      const message = e.data;
      console.log('Message from Stockfish:', message);
      // Parse message and update evaluation
      const match = message.match(/info depth 18 score cp (-?\d+)/);
      if (match) {
        setEvaluation(parseInt(match[1], 10) / 100); // Normalizing centipawns to a displayable format
      }
    };

    // Setup the FEN position in Stockfish
    stockfishRef.current.postMessage(`position fen ${fen}`);
    stockfishRef.current.postMessage("go depth 18");

    return () => {
      stockfishRef.current?.terminate();
    };
  }, [fen]);

  // Smooth transition effect
  const [currentEvaluation, setCurrentEvaluation] = useState(evaluation);
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentEvaluation !== evaluation) {
        const diff = evaluation - currentEvaluation;
        setCurrentEvaluation(prev => prev + diff / 10); // Adjust divisor for smoother or faster animation
      }
    }, 50); // Adjust timing for smoother or faster animation

    return () => clearInterval(interval);
  }, [evaluation, currentEvaluation]);

  return (
    <div style={{ height: '20px', width: `${Math.abs(currentEvaluation * 100)}%`, backgroundColor: currentEvaluation > 0 ? 'blue' : 'red' }}>
      {currentEvaluation.toFixed(2)}
    </div>
  );
};

export default EvalBar;
