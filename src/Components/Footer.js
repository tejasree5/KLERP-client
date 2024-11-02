import React from 'react';

const Footer = () => {
  const currentDate = new Date().toLocaleDateString('en-GB');

  return (
    <footer>
      <p>{currentDate}</p>
    </footer>
  );
};

export default Footer;
