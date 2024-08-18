// `electron-react-boilerplate/src/renderer/Pages/PvPGamePage.tsx`
import React from 'react';
import { useLocation } from 'react-router-dom';
import GoBackButton from '../Components/GoBackButton';
import Timer from '../Components/Timer';
import Chessboard from '../Components/ChessBoard';

const PvPGamePage: React.FC = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const time = Number(params.get('time'));
  const increment = Number(params.get('increment'));

  return (
    <div>
      <GoBackButton />

      <Chessboard />
      <p>Increment: {increment} seconds</p>
      <Timer time={time} increment={increment} />
      {/* Add your game logic here */}
    </div>
  );
};

export default PvPGamePage;
