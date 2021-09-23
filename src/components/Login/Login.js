import React, { useState } from "react";
import {
  Grid,
  Paper,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
  Link,
  Typography,
} from "@mui/material";

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  //const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const stylePaper = {
    height: "78vh",
    width: 340,
    padding: 20,
    margin: "20px auto",
  };
  const stylegrid = { backgroundColor:'red' };
  const styleTextField = { margin: "10px 0" };
  const stylebutton = { margin: "8px 0" };
  const styleLink = { margin: "8px 0" };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

    setFormIsValid(
      event.target.value.includes("@") && enteredPassword.trim().length > 10
    );
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(
      event.target.value.trim().length > 10 && enteredEmail.includes("@")
    );
  };

  // const validateEmailHandler = () => {
  //   setEmailIsValid(enteredEmail.includes('@'));
  // };

  // const validatePasswordHandler = () => {
  //   setPasswordIsValid(enteredPassword.trim().length > 6);
  // };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      props.onLogin(enteredEmail, enteredPassword);
    }
  };

  return (
    <Grid style={stylegrid}>
      <Paper elevation={10} style={stylePaper}>
        <Grid align="center">
          <h2>Sign In</h2>
        </Grid>

        <TextField
          label="User Id"
          placeholder="example@gmail.com"
          fullWidth
          required
          onChange={emailChangeHandler}
          //onBlur={validateEmailHandler}
        />

        <TextField
          style={styleTextField}
          label="Password"
          type="password"
          placeholder="Enter password"
          minLength={10}
          fullWidth
          required
          onChange={passwordChangeHandler}
          //onBlur={validatePasswordHandler}
        />
        <FormControlLabel label="Remember me" control={<Checkbox />} />
        <Button
          style={stylebutton}
          variant="contained"
          type="submit"
          fullWidth
          required
          onClick={submitHandler}
        >
          Sign In
        </Button>
        <Typography>
          <Link>Forgot password</Link>
        </Typography>
        <Typography style={styleLink}>
          Are you a new user?
          <Link>Sign Up</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
