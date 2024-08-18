// src/renderer/App.tsx
import { MemoryRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import PvPPage from './Pages/PvPPage';
import { showPvPpage } from './navigation';
import PvPGamePage from "./Pages/PvPGamePage";

function Hello() {
  const navigate = useNavigate();
  return (
    <div className="principale">
      <h1>smart chessboard</h1>
      <div className="sceltamod">
        <button onClick={() => showPvPpage(navigate)} className="mod1">player vs player</button>
        <button className="mod2">player vs computer</button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/pvp" element={<PvPPage />} />
        <Route path="/game" element={<PvPGamePage />} />
      </Routes>
    </Router>
  );
}
