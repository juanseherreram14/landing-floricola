import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard({name,description,url,width,margin}) {
  return (
<Card sx={{ width: width, margin: margin }}>
      <CardMedia
      
        sx={{ height: 'auto', maxWidth: '100%' }}  
       
        image={"https://florfashions.com/web/wp-content/uploads/2022/06/Diseno-sin-titulo-33.png"}
        title="green iguana"
      />
       <img style={{ height: 'auto', maxWidth: '100%' }}src={"https://florfashions.com/web/wp-content/uploads/2022/06/Diseno-sin-titulo-33.png"} alt="flores"></img>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        {/* Add your card actions here */}
      </CardActions>
    </Card>
  );
}