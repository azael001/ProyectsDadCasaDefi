import React from 'react';
import Avatar  from '@mui/material/Avatar';
import Typography  from '@mui/material/Typography';
import Stack  from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
import { useState } from 'react';

function Testimonio({imageUrl,name,job,description}) {
  
/*a*/
  return (
    <Stack
  direction={{xs:"column", sm:"block"}}
  sx={{
    justifyContent: "center",
    alignItems: "center",
  }}
>   
  <Card sx={{ maxWidth: 450 }} >
      <CardMedia
        sx={{ height: 270 , width:450 }}
        image={imageUrl}
        title={name}
      />
      <CardContent  >
        <Typography gutterBottom variant="h6" component="div"  sx={{textAlign: 'center'}}>
          {name}
        </Typography>
        <Typography gutterBottom variant="h7" component="div"  sx={{textAlign: 'center'}}>
          {job}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>

    </Stack>
  )


}


export default Testimonio
