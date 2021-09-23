import { Box} from "@mui/system";
import React from "react";
import { Grid } from "@mui/material";

import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
  
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const Navigation = (props) => {
  return (
    <Grid>
      {props.isLoggedIn && <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
            <Typography>Menu</Typography>
            <Button onClick={props.onLogout} >Logout</Button>
          </Toolbar>
          
        </AppBar>
      </Box>}
    </Grid>
  );
};

export default Navigation;
