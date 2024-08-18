import React from 'react';

interface IncrementSelectorProps {
  increment: number;
  setIncrement: React.Dispatch<React.SetStateAction<number>>;
}

const IncrementSelector: React.FC<IncrementSelectorProps> = ({ increment, setIncrement }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIncrement(Number(event.target.value));
  };

  return (
    <div>
      <label htmlFor="incrementRange">{increment} seconds</label>
      <input
        type="range"
        id="incrementRange"
        min="0"
        max="30"
        value={increment}
        onChange={handleChange}
        style={{ width: '100%' }}
      />
    </div>
  );
};

export default IncrementSelector;
