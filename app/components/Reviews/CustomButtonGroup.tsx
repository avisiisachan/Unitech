import React from 'react';

interface CustomButtonGroupProps {
  next: () => void;
  previous: () => void;
}

const CustomButtonGroup: React.FC<CustomButtonGroupProps> = ({ next, previous }) => {
  return (
    <div>
      <button onClick={previous}>Previous</button>
      <button onClick={next}>Next</button>
    </div>
  );
};

export default CustomButtonGroup;
