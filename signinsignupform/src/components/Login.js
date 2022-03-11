import React from "react";
import LockSharpIcon from "@mui/icons-material/LockSharp";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import {
  Avatar,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
  Button,
} from "@material-ui/core";

function Login({ handleChange }) {
  const paperStyle = {
    padding: 20,
    height: "57vh",
    width: 300,
    margin: "0 auto",
  };

  const avatarStyle = { backgroundColor: "darkcyan" };
  const btnstyle = { margin: "8px 0" }; //which helped sign in button to come down a little and aligned perfectly

  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockSharpIcon />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>
        <TextField
          label="Username"
          placeholder="Enter username"
          fullWidth
          required
        />
        <TextField
          label="Password"
          placeholder="Enter password"
          type="password"
          fullWidth
          required
        />
        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="Remember Me"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={btnstyle}
          fullWidth
        >
          SIGN IN
        </Button>
        <Typography>
          <Link href="#">Forgot Password ?</Link>
        </Typography>
        <Typography>
          Do you have an account ?
          <Link href="#" onClick={() => handleChange("event", 1)}>
            Sign Up
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
}

export default Login;
