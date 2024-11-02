import React, { useState } from 'react';

const AttendanceButton = () => {
  const [status, setStatus] = useState('Absent');

  const toggleStatus = () => {
    setStatus(status === 'Present' ? 'Absent' : 'Present');
  };

  const buttonStyle = {
    backgroundColor: status === 'Present' ? 'green' : 'red',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease'
  };

  return (
    <button onClick={toggleStatus} style={buttonStyle}>
      {status}
    </button>
  );
};

export default AttendanceButton;
