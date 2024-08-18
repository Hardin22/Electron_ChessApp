import React, { useState, useEffect } from 'react';
import { Chessboard } from 'react-chessboard';
import { Chess } from 'chess.js';

const ChessBoard: React.FC = () => {
  const [game, setGame] = useState(new Chess());
  const [fen, setFen] = useState<string>(game.fen());
  const [move, setMove] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleMove = () => {
    const moveResult = game.move(move);
    if (moveResult) {
      setFen(game.fen());  // Aggiorna il FEN che verrà passato a EvalBar
      setError(null);      // Pulisce eventuali errori precedenti
    } else {
      setError('Invalid move');
    }
    setMove('');
  };

  return (
    <div>
      <Chessboard position={fen} />
      <input
        type="text"
        value={move}
        onChange={(e) => setMove(e.target.value)}
        placeholder="Enter your move (e.g., e2-e4)"
      />
      <button onClick={handleMove}>Make Move</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default ChessBoard;
