// src/renderer/GoBackButton.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const GoBackButton: React.FC = () => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(-1)}>Go Back</button>
  );
};

export default GoBackButton;
