import React from 'react';
import Button from '@mui/material/Button';

const CenteredButton = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
      <Button variant="contained" color="success">
        See catalogue
      </Button>
    </div>
  );
};

export default CenteredButton;