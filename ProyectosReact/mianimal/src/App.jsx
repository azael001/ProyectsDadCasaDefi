import React from 'react'
import Ficha from './components/Ficha'
import FormRegistro from './components/FormRegistro'
import './App.css'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'

function App() {
  const animals = [{
    id: 0,
    animal: 'gato',
    atribute: 'feliz',
    imageUrl: '/cat-4189697_640.jpg',
    imageSize: 150,
    description: 'Gato común',
    },
    { id: 1,
    animal: 'perro',
    atribute: 'bello',
    imageUrl: '/dog.jpg',
    imageSize: 150,
    description: 'Perro callejero',
    },
    { id: 2,
    animal: 'loro',
    atribute: 'hablador',
    imageUrl: '/bird.jpg',
    imageSize: 150,
    description: 'Loro de la jungla',
    },
    { id: 3,
    animal: 'tortuga',
    atribute: 'perezosa',
    imageUrl: '/turtle.jpg',
    imageSize: 150,
    description: 'Tortuga',
    }]
   

  return (
 <>

<List>
 {animals.map((eachAnimal) => (
 <ListItem key={eachAnimal.id}>
 <Ficha  animal={eachAnimal.animal}
              atribute={eachAnimal.atribute}
              imageUrl={eachAnimal.imageUrl}
              imageSize={eachAnimal.imageSize}
              description={eachAnimal.description}>

 </Ficha>
 </ListItem>))}
 </List>
 

{/*     <FormRegistro/> */}
    </>
  )
}

export default App
