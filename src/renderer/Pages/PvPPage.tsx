import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GoBackButton from '../Components/GoBackButton';
import TimeSelector from '../Components/TimeSelector';
import IncrementSelector from '../Components/IncrementSelector';

const PvPPage: React.FC = () => {
  const [time, setTime] = useState(10); // Default to 10 minutes
  const [increment, setIncrement] = useState(2); // Default to 2 seconds
  const navigate = useNavigate();

  const startgame = () => {
    navigate(`/game?time=${time}&increment=${increment}`);
  };

  return (
    <div>
      <GoBackButton />
      <h1>Player vs Player</h1>
      <h2>tempo:</h2>
      <TimeSelector time={time} setTime={setTime} />
      <h2>incremento</h2>
      <IncrementSelector increment={increment} setIncrement={setIncrement} />
      <button onClick={startgame}>start</button>
    </div>
  );
};

export default PvPPage;
