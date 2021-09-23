import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // useEffect(() => {
  //   const storedUsewrINfo = localStorage.getItem("IsLoggedIn");
  //   if (storedUsewrINfo === "1") {
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  const user = {
    Id: "abcd@gmail.com",
    password: "12345678900",
  };

  const loginHandler = (email, password) => {
    if (email === user.Id && password === user.password) {
      setIsLoggedIn(true);
      localStorage.setItem("IsLoggedIn", "1");
    }
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <Grid>
      <Typography>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && (
          <Home isLoggedIn={isLoggedIn} onLogout={logoutHandler} />
        )}
      </Typography>
    </Grid>
  );
}

export default App;
