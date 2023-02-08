import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 140 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/Bujia.jpg"
        title="bujia"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Bujia
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a condimentum odio. Morbi dapibus, diam et vestibulum efficitur, dolor lorem lacinia erat, viverra pulvinar velit ipsum malesuada dui. Cras sed.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Añadir al Carrito</Button>
      </CardActions>
    </Card>
  );
}