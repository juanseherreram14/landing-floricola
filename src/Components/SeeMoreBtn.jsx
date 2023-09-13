import React from 'react';
import Button from '@mui/material/Button';

const CenteredButton = ({text}) => {
  const buttonStyles = {

    fontFamily: 'Roboto Slab, sans-serif',
    border: '2px solid black',
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 30,
    padding: '10px 40px',
    fontSize: '1rem',
    cursor: 'pointer',


  


  
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '5vh' }}>
      <Button variant="contained" color="success" style={buttonStyles}>
       {text}
      </Button>
    </div>
  );
};

export default CenteredButton;
