import React from 'react';

const Header = () => {
  const currentDate = new Date().toLocaleDateString('en-GB');

  return (
    <header>
      <h1 style={{ textAlign:'center' }}>Welcome to KLU </h1>
      <h2 style={{ textAlign:'center', color:'white'}}>ERP works here!</h2>
      <p>{currentDate}</p>
    </header>
  );
};

export default Header;
