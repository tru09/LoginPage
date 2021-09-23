import React from "react";
import { Grid } from "@mui/material";
import Navigation from "../Navigation";

const Home = (props) => {
  const styleheaader = { color: "blue",padding:80};
  return (
    <Grid>
      <Navigation isLoggedIn={props.isLoggedIn} onLogout={props.onLogout} />
       <Grid align='center'>
       <h2 style={styleheaader}>"Hi! You are Logged in successfully"</h2>

       </Grid>
      
    </Grid>
  );
};

export default Home;
