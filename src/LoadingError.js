import React from 'react';

const LoadingError = ({ message }) => {
  return (
    <div style={{ color: 'red', fontSize: '16px', fontWeight: 'bold' }}>
      {message}
    </div>
  );
};

export default LoadingError;
