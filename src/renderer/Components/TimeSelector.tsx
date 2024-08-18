import React from 'react';

interface TimeSelectorProps {
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
}

const TimeSelector: React.FC<TimeSelectorProps> = ({ time, setTime }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTime(Number(event.target.value));
  };

  return (
    <div>
      <label htmlFor="timeRange">Select Game Duration: {time} minutes</label>
      <input
        type="range"
        id="timeRange"
        min="1"
        max="60"
        value={time}
        onChange={handleChange}
        style={{ width: '100%' }}
      />
    </div>
  );
};

export default TimeSelector;
