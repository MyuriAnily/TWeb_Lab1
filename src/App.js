import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import {useState} from "react";

function App() {
  return (
    <div className="App">
       <SimpleBottomNavigation></SimpleBottomNavigation>
      <header className="App-header">
       
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Mazur Vsevolod CR-193
        </p>
        <div>
          <h1>Content</h1>
        <BasicGrid></BasicGrid>
        </div>
        <form action="">
<FullWidthTextField></FullWidthTextField>
<br/>
<FullWidthTextField></FullWidthTextField>
<br/>
<FullWidthTextField></FullWidthTextField>
<br/>
<button type="submit">Submit</button>
</form>
      </header>
    </div>
  );
}

export default App;

// import RestoreIcon from '@mui/icons-material/Restore';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
 function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Home"  />
        <BottomNavigationAction label="About"  />
        <BottomNavigationAction label="FAQ"  />
      </BottomNavigation>
    </Box>
  );
}


function MediaCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={props.picture}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>

        <Grid item xs={4}>
          <Item><MediaCard title="Dragon" description="A dragon is a reptile-like legendary creature that appears in the folklore of many cultures worldwide."picture="https://awoiaf.westeros.org/images/thumb/d/d4/Aegon_on_Balerion.jpg/1200px-Aegon_on_Balerion.jpg"></MediaCard></Item>
        </Grid>
        <Grid item xs={4}>
          <Item><MediaCard title="Iguana" description="Iguana is a genus of herbivorous lizards that are native to tropical areas of Mexico, Central America, South America, and the Caribbean. "picture="https://aquamir63.ru/wp-content/uploads/2012/09/87441702.jpg"></MediaCard></Item>
        </Grid>
        <Grid item xs={4}>
          <Item><MediaCard title="Snake" description="Snakes like all other squamates, snakes are ectothermic, amniote vertebrates covered in overlapping scales." picture="https://ichef.bbci.co.uk/news/976/cpsprodpb/1486F/production/_105597048_snakes8.jpg"></MediaCard></Item>
        </Grid>

      </Grid>
    </Box>
  );
}

function FullWidthTextField() {
  const [input, setInput] = useState('');
  console.log(input)
  return (
  <Box
  sx={{
  width: 500,
  maxWidth: '100%',
  }}
  >
  <input value={input} onInput={e => setInput(e.target.value)}/>
  </Box>
  );
  }
  


