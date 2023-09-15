import React from 'react';

import Button from '@mui/material/Button';

const CenteredButton = ({text}) => {

  const buttonStyles = {
    margin: '0 auto', 
    display: 'block',
    fontFamily: 'Roboto Slab, sans-serif',
    border: '2px solid black',
    backgroundColor: 'white', 
    color: 'black',
    borderRadius: 60,
    padding: '10px 40px',
    fontSize: '1rem',
    cursor: 'pointer'
  };

  return (
    <Button style={buttonStyles}>
      {text}
    </Button>
  );

};

export default CenteredButton;