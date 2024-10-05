import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { Avatar } from '@mui/material';
import { Typography } from '@mui/material';
import { Stack } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { useState } from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function Ficha({animal,atribute,imageUrl,imageSize,description}) {
  const [count, setCount] = useState(0)
  function handleClick(){
    setCount(count+1)
  }
/*a*/
  return (
    <Stack
  direction={{xs:"column", sm:"block"}}
  sx={{
    justifyContent: "center",
    alignItems: "center",
  }}
> 
      <Typography>Soy un {animal} feroz</Typography>
      <Avatar alt="Remy Sharp" src={imageUrl} sx={{ width: imageSize, height: imageSize }}/>
      <Button onClick={handleClick}>Me has hecho  {count} rascaditas </Button> 
      <Typography> {description}</Typography>
    </Stack>
  )


}


export default Ficha
