import React from 'react';

const DecorativeBox = ({ children }) => {
  return (
    <div style={{ border: '2px solid black', padding: '20px' }}>
      {children}
    </div>
  );
};

export default DecorativeBox;