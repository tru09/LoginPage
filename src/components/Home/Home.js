import React from 'react';
import { Grid } from '@mui/material';
import Navigation from '../MainHeader/Navigation';


const Home = (props) => {

  const styleheaader={color:'blue'}
  return (
    <Grid>
     <Navigation isLoggedIn={props.isLoggedIn} onLogout={props.logoutHandler} />
      <Grid align='center'>
      <h2 style={styleheaader}>"Hi! You are Logged in successfully"</h2>
      </Grid>
      
      </Grid>
    
      
   
  );
};

export default Home;
